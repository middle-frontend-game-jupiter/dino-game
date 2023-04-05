import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { UserViewer } from '@/entities/auth'
import useStyles from './styles'
import Grid from '@mui/material/Grid'

export const Header: FC = () => {
  const styles = useStyles()

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={styles.root}>
      <Typography variant="h6" noWrap component="div">
        Dino
      </Typography>
      <UserViewer />
    </Grid>
  )
}
