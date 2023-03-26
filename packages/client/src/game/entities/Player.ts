import dinoSprite from '../images/dino.png'
import dinoRun from '../images/dino_run.png'
import dinoStanding from '../images/dino_standing.png'

import { GameEntity } from './GameEntity'

export class Player extends GameEntity {
  private WALK_ANIMATION_TIMER = 200
  private walkAnimationTimer = this.WALK_ANIMATION_TIMER
  private dinoRunImages = [] as HTMLImageElement[]

  private jumpPressed = false
  private jumpInProgress = false
  private falling = false
  private JUMP_SPEED = 0.6
  private GRAVITY = 0.4

  private minJumpHeight: number
  private maxJumpHeight: number
  private scaleRatio: number

  private standingStillImage: HTMLImageElement
  private image: HTMLImageElement

  public x: number
  public y: number
  public yStandingPosition: number

  constructor(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    minJumpHeight: number,
    maxJumpHeight: number,
    scaleRatio: number
  ) {
    super({ ctx, width, height })

    this.minJumpHeight = minJumpHeight
    this.maxJumpHeight = maxJumpHeight
    this.scaleRatio = scaleRatio

    this.x = 10 * scaleRatio
    this.y = this.canvas.height - this.height - 1.5 * scaleRatio
    this.yStandingPosition = this.y

    this.standingStillImage = new Image()
    this.standingStillImage.src = dinoRun
    this.image = this.standingStillImage

    const dinoRunImage1 = new Image()
    dinoRunImage1.src = dinoSprite

    const dinoRunImage2 = new Image()
    dinoRunImage2.src = dinoStanding

    this.dinoRunImages.push(dinoRunImage1)
    this.dinoRunImages.push(dinoRunImage2)

    window.removeEventListener('keydown', this.keydown)
    window.removeEventListener('keyup', this.keyup)

    window.addEventListener('keydown', this.keydown)
    window.addEventListener('keyup', this.keyup)

    window.removeEventListener('touchstart', this.touchstart)
    window.removeEventListener('touchend', this.touchend)

    window.addEventListener('touchstart', this.touchstart)
    window.addEventListener('touchend', this.touchend)
  }

  private touchstart = () => {
    this.jumpPressed = true
  }

  private touchend = () => {
    this.jumpPressed = false
  }

  private keydown = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.jumpPressed = true
    }
  }

  private keyup = (event: KeyboardEvent) => {
    if (event.code === 'Space') {
      this.jumpPressed = false
    }
  }

  public update(gameSpeed: number, frameTimeDelta: number) {
    this.run(gameSpeed, frameTimeDelta)

    if (this.jumpInProgress) {
      this.image = this.standingStillImage
    }

    this.jump(frameTimeDelta)
  }

  public run(gameSpeed: number, frameTimeDelta: number) {
    if (this.walkAnimationTimer <= 0) {
      if (this.image === this.dinoRunImages[0]) {
        this.image = this.dinoRunImages[1]
      } else {
        this.image = this.dinoRunImages[0]
      }
      this.walkAnimationTimer = this.WALK_ANIMATION_TIMER
    }
    this.walkAnimationTimer -= frameTimeDelta * gameSpeed
  }

  public draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  private jump(frameTimeDelta: number) {
    if (this.jumpPressed) {
      this.jumpInProgress = true
    }

    if (this.jumpInProgress && !this.falling) {
      if (
        this.y > this.canvas.height - this.minJumpHeight ||
        (this.y > this.canvas.height - this.maxJumpHeight && this.jumpPressed)
      ) {
        this.y -= this.JUMP_SPEED * frameTimeDelta * this.scaleRatio
      } else {
        this.falling = true
      }
    } else {
      if (this.y < this.yStandingPosition) {
        this.y += this.GRAVITY * frameTimeDelta * this.scaleRatio
        if (this.y + this.height > this.canvas.height) {
          this.y = this.yStandingPosition
        }
      } else {
        this.falling = false
        this.jumpInProgress = false
      }
    }
  }
}
