import React, { FC } from 'react'
import { Typography } from '@mui/material'
import { UserViewer } from '@/entities/auth'
import useStyles from './styles'
import Grid from '@mui/material/Grid'
import { useLogoutMutation } from '@/services/auth'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config'
import IconButton from '@mui/material/IconButton'
import { Moon, Sun } from 'phosphor-react'
import { MODE } from '@/app/styles/variables/global'
import { useAppSelector } from '@/app/hooks/redux'
import { getTheme } from '@/entities/app/model/selectors'
import { useDispatch } from 'react-redux'
import { setTheme } from '@/entities/app/model/appSlice'

const getIcon = (theme: MODE): React.ReactElement | null => {
  switch (theme) {
    case MODE.DARK:
      return <Sun />
    case MODE.LIGHT:
      return <Moon />
    default:
      return null
  }
}

export const Header: FC = () => {
  const styles = useStyles()
  const dispatch = useDispatch()

  const [logout] = useLogoutMutation()
  const theme = useAppSelector(getTheme)

  const onClick = () => {
    logout({})
  }
  const handleThemeChange = () => {
    dispatch(setTheme(theme === MODE.DARK ? MODE.LIGHT : MODE.DARK))
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
        <IconButton size={'small'} onClick={handleThemeChange}>
          {getIcon(theme)}
        </IconButton>
        <UserViewer />
        <AppLink to={RoutePath.auth} onClick={onClick}>
          Log out
        </AppLink>
      </Grid>
    </Grid>
  )
}
