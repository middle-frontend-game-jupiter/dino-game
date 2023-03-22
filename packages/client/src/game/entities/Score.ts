import { GameEntity } from './GameEntity'

export class Score extends GameEntity {
  private score = 0 as number

  private scaleRatio: number

  constructor(
    ctx: CanvasRenderingContext2D, 
    scaleRatio: number
  ) {
    super({ ctx, width: 0, height: 0 })
    this.scaleRatio = scaleRatio
  }

  public update(frameTimeDelta: number) {
    this.score += frameTimeDelta * 0.01
  }

  public setHighScore() {
    const highScore = Number(localStorage.getItem('high-score'));
    if (this.score > highScore) {
      localStorage.setItem('high-score', Math.floor(this.score).toString());
    }
  }

  public reset() {
    this.score = 0
  }

  public draw() {
    const highScore = Number(localStorage.getItem('high-score'));

    const y = 20 * this.scaleRatio

    const fontSize = 20 * this.scaleRatio
    this.ctx.font = `${fontSize}px serif`
    this.ctx.fillStyle = "#525250"
    
    const scoreX = this.canvas.width - 75 * this.scaleRatio
    const highScoreX = scoreX - 125 * this.scaleRatio

    const scorePadded = Math.floor(this.score).toString().padStart(6, '0')
    const highScorePadded = highScore.toString().padStart(6, '0')

    this.ctx.fillText(scorePadded, scoreX, y)
    this.ctx.fillText(`HI ${highScorePadded}`, highScoreX, y)
  }
}