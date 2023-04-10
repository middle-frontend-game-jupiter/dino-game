import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { UserViewer } from '@/entities/auth'
import useStyles from './styles'
import Grid from '@mui/material/Grid'
import { useLogoutMutation } from '@/services/auth'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config'

export const Header: FC = () => {
  const styles = useStyles()

  const [logout] = useLogoutMutation()

  const onClick = () => {
    logout({})
  }

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={styles.root}>
      <Grid component={Typography} variant="h6">
        Dino
      </Grid>
      <Grid container width={'auto'} gap={1} alignItems={'center'}>
        <UserViewer />
        <AppLink to={RoutePath.auth} onClick={onClick}>
          Log out
        </AppLink>
      </Grid>
    </Grid>
  )
}
