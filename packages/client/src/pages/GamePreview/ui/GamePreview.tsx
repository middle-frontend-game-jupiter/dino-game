import React, { useLayoutEffect, useRef, useState } from 'react'

import { DinoGame } from '@/game'
import { Navigate } from 'react-router';

const GamePreview = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const [gameOver, setGameOver] = useState<boolean>(false);


  useLayoutEffect(() => {
    if(canvas.current) {
      DinoGame
        .execute(canvas.current)
        .start()
        .on('GAME_OVER', () => setGameOver(true))
        .on('GAME_RESET', () => setGameOver(false))
    }
  }, [])


  if (gameOver) {
    return <Navigate to="/leaderboard" replace={true} />
  }


  return (
    <div>
      <canvas ref={canvas} id="game"></canvas>
    </div>
  )
}

export default GamePreview
