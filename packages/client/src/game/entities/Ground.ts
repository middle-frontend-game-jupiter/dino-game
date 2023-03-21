import { GameEntity } from './GameEntity'
import ground from '../images/ground.png'

export class Ground extends GameEntity {
  speed: number
  scaleRatio: number
  x: number
  y: number

  groundImage: HTMLImageElement


  constructor(
    ctx: CanvasRenderingContext2D, 
    width: number, 
    height: number, 
    speed: number, 
    scaleRatio: number
  ) {
    super({ ctx, width, height })
    this.speed = speed
    this.scaleRatio = scaleRatio

    this.x = 0
    this.y = this.canvas.height - this.height

    this.groundImage = new Image()
    this.groundImage.src = ground
  }

  update(gameSpeed: number, frameTimeDelta: number) {
    this.x -= gameSpeed * frameTimeDelta * this.speed * this.scaleRatio
  }

  draw() {
    this.ctx.drawImage(
      this.groundImage,
      this.x,
      this.y,
      this.width,
      this.height
    )

    this.ctx.drawImage(
      this.groundImage,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    )

    if (this.x < -this.width) {
      this.x = 0
    }
  }

  reset() {
    this.x = 0
  }
}