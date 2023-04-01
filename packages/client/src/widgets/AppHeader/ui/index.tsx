import React, { FC } from 'react';
import { UserViewer } from '@/entities/auth'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { style } from './styles'

export const AppHeader: FC = () => (
  <AppBar 
    position='fixed' 
    sx={style.appbar}
  >
    <Toolbar sx={style.toolbar}>
      <Typography variant='h6' noWrap component='div'>
        Dino
      </Typography>

      <UserViewer />
    </Toolbar>
  </AppBar>
)
