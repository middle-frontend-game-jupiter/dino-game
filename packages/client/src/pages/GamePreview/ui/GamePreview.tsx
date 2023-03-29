import React, { useCallback, useEffect, useRef } from 'react'

import { DinoGame } from '@/game'
import { Box } from '@mui/system'
import { Drawer, Toolbar } from '@mui/material'
import { style } from './style'
import { Canvas } from '@/shared/ui/Canvas/Canvas'

const GamePreview = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const container = useRef<HTMLDivElement>(null)
  const game = useRef<typeof DinoGame | null>()

  game.current = DinoGame;

  const onEnd = useCallback((score: number) => {
    console.log(score)
  }, [])

  const onStart = useCallback(() =>{
    console.log('start')
  }, [])

  useEffect(() => {
    let instance = undefined as DinoGame | undefined;

    if(container.current && canvas.current) {
      instance = game.current?.execute(canvas.current, {
        container: container.current,
        onEnd,
        onStart,
      })

      instance?.start()
    }

    return () => {
      game.current = null;
      instance = undefined;
    }
  }, [])

  return (
    <Box sx={{ display: 'flex'}}>
      <Drawer
        variant="permanent"
        sx={style.drawer}
      >
        <Toolbar />
      </Drawer>
    
      <Box component="main" sx={style.content}>
        <Toolbar />
        <Canvas 
          canvas={canvas}
          container={container}
        />
      </Box>
    </Box>
  )
}

export default GamePreview
