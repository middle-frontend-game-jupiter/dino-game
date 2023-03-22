import React, { Ref } from "react"
import { style } from "./styles"

type CanvasProps = {
  canvas: Ref<HTMLCanvasElement>;
  container: Ref<HTMLDivElement>;
}

export function Canvas({
  canvas,
  container,
}: CanvasProps) {
  return (
    <div ref={container} style={style.container}>
      <canvas style={style.canvas} ref={canvas}></canvas>
    </div>
  )
}