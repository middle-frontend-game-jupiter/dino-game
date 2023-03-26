import { Player } from './entities/Player'
import { Ground } from './entities/Ground'
import { Score } from './entities/Score'

import { getScaleRatio } from './utils/scale'
import { CactiController } from './entities/Cactuses'

import type { GameImages } from './types/Images'

export { GAME_ACTIONS } from './utils/actions'

import {
  CACTI_CONFIG, 
  GAME_HEIGHT, 
  GAME_SPEED_INCREMENT, 
  GAME_SPEED_START, 
  GAME_WIDTH, 
  GROUND_AND_CACTUS_SPEED, 
  GROUND_HEIGHT, 
  GROUND_WIDTH, 
  MAX_JUMP_HEIGHT, 
  MIN_JUMP_HEIGHT, 
  PLAYER_HEIGHT, 
  PLAYER_WIDTH 
} from './utils/constants'

import Observer from '@/shared/lib/observer'
import { GAME_ACTIONS } from './utils/actions'

export class DinoGame extends Observer {
  canvas: HTMLCanvasElement
  previousTime: number | null
  ctx: CanvasRenderingContext2D | null

  gameSpeed = GAME_SPEED_START
  gameOver = false
  hasAddedEventListenersForRestart = false
  waitingToStart = true

  player: null | Player
  ground: null | Ground
  score: null | Score
  cacti: null | CactiController
  scaleRatio: number
  container: HTMLDivElement

  constructor(canvas: HTMLCanvasElement, container: HTMLDivElement) {
    super()
    
    this.canvas = canvas
    this.previousTime = null

    this.container = container

    this.scaleRatio = getScaleRatio(container)


    this.ctx = this.canvas.getContext('2d')

    this.gameLoop = this.gameLoop.bind(this)
    this.clearScreen = this.clearScreen.bind(this)
    this.reset = this.reset.bind(this)
    this.start = this.start.bind(this)
    this.setScreen = this.setScreen.bind(this)

    this.createSprites = this.createSprites.bind(this)

    this.player = null
    this.ground = null
    this.score = null
    this.cacti = null

    this.init()
  }

  init() {
    window.addEventListener("resize", () => setTimeout(this.setScreen, 500))

    if (screen.orientation) {
      screen.orientation.addEventListener("change", this.setScreen)
    }

    this.setScreen()
  }

  clearScreen() {  
    if(!this.ctx) return

    this.ctx.fillStyle = "white"
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  createSprites() {
    if(!this.scaleRatio || !this.ctx) return
  
    const playerWidthInGame = PLAYER_WIDTH * this.scaleRatio
    const playerHeightInGame = PLAYER_HEIGHT * this.scaleRatio
    const minJumpHeightInGame = MIN_JUMP_HEIGHT * this.scaleRatio
    const maxJumpHeightInGame = MAX_JUMP_HEIGHT * this.scaleRatio
  
    const groundWidthInGame = GROUND_WIDTH * this.scaleRatio
    const groundHeightInGame = GROUND_HEIGHT * this.scaleRatio
  
    this.player = new Player(
      this.ctx,
      playerWidthInGame,
      playerHeightInGame,
      minJumpHeightInGame,
      maxJumpHeightInGame,
      this.scaleRatio
    )
  
    this.ground = new Ground(
      this.ctx,
      groundWidthInGame,
      groundHeightInGame,
      GROUND_AND_CACTUS_SPEED,
      this.scaleRatio
    )
  
    const cactiImages = CACTI_CONFIG.map((cactus) => {
      const image = new Image()
      image.src = cactus.image
      return {
        image: image,
        width: cactus.width * this.scaleRatio,
        height: cactus.height * this.scaleRatio,
      }
    }) as GameImages[]
  
    this.cacti = new CactiController(
      this.ctx,
      cactiImages,
      this.scaleRatio,
      GROUND_AND_CACTUS_SPEED
    )
  
    this.score = new Score(this.ctx, this.scaleRatio)
  }
  
  setScreen() {
    this.scaleRatio = getScaleRatio(this.container)

    this.canvas.width = GAME_WIDTH * this.scaleRatio
    this.canvas.height = GAME_HEIGHT * this.scaleRatio
    this.createSprites()
  }

  showGameOver() {
    if(!this.ctx) return

    const fontSize = 70 * this.scaleRatio
    this.ctx.font = `${fontSize}px Verdana`
    this.ctx.fillStyle = "grey"
    const x = this.canvas.width / 4.5
    const y = this.canvas.height / 2
    this.ctx.fillText("GAME OVER", x, y)

    this.emit(GAME_ACTIONS.GAME_OVER)
  }

  start() {
    requestAnimationFrame(this.gameLoop)
    window.addEventListener("keyup", this.reset, { once: true })

    return this
  }


  showStartGameText() {
    if(!this.ctx) return

    const fontSize = 40 * this.scaleRatio
    this.ctx.font = `${fontSize}px Verdana`
    this.ctx.fillStyle = "grey"

    const x = this.canvas.width / 14
    const y = this.canvas.height / 2
    this.ctx.fillText("Tap Screen or Press Space To Start", x, y)
  }

  updateGameSpeed(frameTimeDelta: number) {
    this.gameSpeed += frameTimeDelta * GAME_SPEED_INCREMENT
  }
 
  gameLoop(currentTime: number) {
    if(!this.player || !this.ground || !this.score || !this.cacti) return

    if (this.previousTime === null) {
      this.previousTime = currentTime
      requestAnimationFrame(this.gameLoop)
      return
    }
    const frameTimeDelta = currentTime - this.previousTime
    this.previousTime = currentTime
  
    this.clearScreen()

  
    if (!this.gameOver && !this.waitingToStart) {
      this.cacti.update(this.gameSpeed, frameTimeDelta)
      this.player.update(this.gameSpeed, frameTimeDelta)
      this.ground.update(this.gameSpeed, frameTimeDelta)
      this.score.update(frameTimeDelta)
      this.updateGameSpeed(frameTimeDelta)
    }
  
    if (!this.gameOver && this.cacti.collideWith(this.player)) {
      this.gameOver = true
      this.setupGameReset()
    }
  
    this.cacti.draw()
    this.player.draw()
    this.ground.draw()
    this.score.draw()
  
    if (this.gameOver) {
      this.showGameOver()
    }
  
    if (this.waitingToStart) {
      this.showStartGameText()
    }
  
    requestAnimationFrame(this.gameLoop)
  }

  reset() {
    this.hasAddedEventListenersForRestart = false
    this.gameOver = false
    this.waitingToStart = false
 
    this.gameObjectReset()

    this.gameSpeed = GAME_SPEED_START

    this.emit(GAME_ACTIONS.GAME_RESET)
  }

  setupGameReset() {
    if (!this.hasAddedEventListenersForRestart) {
      this.hasAddedEventListenersForRestart = true
  
      setTimeout(() => {
        window.addEventListener("keyup", this.reset, { once: true })
        window.addEventListener("touchstart", this.reset, { once: true })
      }, 1000)
    }
  }

  gameObjectReset() {
    this.ground && this.ground.reset()
    this.score && this.score.reset()
    this.cacti && this.cacti.reset()
  }

  static execute(canvas: HTMLCanvasElement, container: HTMLDivElement) {
    return new DinoGame(canvas, container)
  }
}