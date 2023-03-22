import { Cactus } from './Cactus'
import { GameEntity } from './GameEntity'

import type { Sprite } from '../types/Sprite'
import { GameImages } from '../types/Images'


export class CactiController extends GameEntity {
  protected CACTUS_INTERVAL_MIN = 500
  protected CACTUS_INTERVAL_MAX = 2000

  protected nextCactusInterval = 0 as number
  protected cacti = [] as Cactus[]

  protected speed: number

  protected cactiImages: GameImages[]
  protected scaleRatio: number

  constructor(
    ctx: CanvasRenderingContext2D, 
    cactiImages: GameImages[], 
    scaleRatio: number, 
    speed: number
  ) {
    super({ ctx, width: 0, height: 0 })
    this.cactiImages = cactiImages
    this.scaleRatio = scaleRatio
    this.speed = speed

    this.setNextCactusTime()
  }

  public setNextCactusTime() {
    const num = this.getRandomNumber(
      this.CACTUS_INTERVAL_MIN,
      this.CACTUS_INTERVAL_MAX
    )

    this.nextCactusInterval = num
  }


  createCactus() {
    const index = this.getRandomNumber(0, this.cactiImages.length - 1)
    const cactusImage = this.cactiImages[index]
    const x = this.canvas.width * 1.5
    const y = this.canvas.height - cactusImage.height

    const cactus = new Cactus(
      this.ctx,
      x,
      y,
      cactusImage.width,
      cactusImage.height,
      cactusImage.image
    )

    this.cacti.push(cactus)
  }


  public update(gameSpeed: number, frameTimeDelta: number) {
    if (this.nextCactusInterval <= 0) {
      this.createCactus()
      this.setNextCactusTime()
    }

    this.nextCactusInterval -= frameTimeDelta

    this.cacti.forEach((cactus) => {
      cactus.update(this.speed, gameSpeed, frameTimeDelta, this.scaleRatio)
    })

    this.cacti = this.cacti.filter((cactus) => cactus.x > -cactus.width)
  }

  public draw() {
    this.cacti.forEach((cactus) => cactus.draw())
  }

  public collideWith(sprite: Sprite) {
    return this.cacti.some((cactus) => cactus.collideWith(sprite))
  }

  public reset() {
    this.cacti = []
  }

  private getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
}