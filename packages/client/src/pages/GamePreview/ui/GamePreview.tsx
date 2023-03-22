import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

import { DinoGame } from '@/game'
import { Box } from '@mui/system'
import { AppBar, Drawer, Toolbar, Typography } from '@mui/material'
import { UserViewer } from '@/entities/auth'
import { style } from './style'

const GamePreview = () => {
  const canvas = useRef<HTMLCanvasElement>(null)
  const container = useRef<HTMLDivElement>(null)

  const [gameOver, setGameOver] = useState<boolean>(false)

  useLayoutEffect(() => {
    if(canvas.current && container.current) {
      DinoGame
        .execute(canvas.current, container.current)
        .start()
        .on('GAME_OVER', () => setGameOver(true))
        .on('GAME_RESET', () => setGameOver(false))
    }
  }, [])

  useEffect(() => {
    if(gameOver) {
      console.log('CALL ENTTITY API LEADERBOARD FROR VIEW LIST IN DRAWER')
    }
  }, [gameOver])


  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar 
        position="fixed" 
        sx={style.appbar}
      >
        <Toolbar sx={style.toolbar}>
          <Typography variant="h6" noWrap component="div">
            Dino
          </Typography>

          <UserViewer />
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={style.drawer}
      >
        <Toolbar />
      </Drawer>
    
      <Box component="main" sx={style.content}>
        <Toolbar />
        <div ref={container} style={style.container}>
          <canvas ref={canvas} id="game"></canvas>
        </div>
      </Box>
    </Box>
  )
}

export default GamePreview
