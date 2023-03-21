import { GameEntity } from './GameEntity'

import type { Sprite } from '../types/Sprite'
import type { GameImages } from '../types/Images'


export class Cactus extends GameEntity {
  x: number
  y: number
  image: GameImages['image']

  constructor(
    ctx: CanvasRenderingContext2D, 
    x: number, 
    y: number, 
    width: number, 
    height: number, 
    image: GameImages['image']
  ) {
    super({ ctx, width, height })
    this.x = x
    this.y = y
    this.image = image
  }

  update(speed: number, gameSpeed: number, frameTimeDelta: number, scaleRatio: number) {
    this.x -= speed * gameSpeed * frameTimeDelta * scaleRatio
  }

  draw() {
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }

  collideWith(sprite: Sprite) {
    const adjustBy = 1.4
    return this.collide(sprite, adjustBy)
  }

  private collide(sprite: Sprite, adjustBy: number) {
    return sprite.x < this.x + this.width / adjustBy 
      && sprite.x + sprite.width / adjustBy > this.x 
      && sprite.y < this.y + this.height / adjustBy 
      && sprite.height + sprite.y / adjustBy > this.y
  }
}