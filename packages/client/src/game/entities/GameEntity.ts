type GameEntityProps = {
  ctx: CanvasRenderingContext2D
  width: number
  height: number
}

export abstract class GameEntity {
  ctx: CanvasRenderingContext2D
  canvas: CanvasRenderingContext2D['canvas']
  width: number
  height: number

  constructor({
    ctx, width, height
  }: GameEntityProps) {
    this.ctx = ctx
    this.canvas = ctx.canvas
    this.width = width
    this.height = height   
  }

  public update(...args: unknown[]): void {
    throw Error('need implementing')
  }

  public draw(): void {
    throw Error('need implementing')
  }
}