import React, { FC, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import { RoutePath } from '@/shared/config'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import {
  Chat,
  Crown,
  GameController,
  Gear,
  List,
  LockSimpleOpen,
  SignIn,
  Table,
  User,
} from 'phosphor-react'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import Typography from '@mui/material/Typography'

export const SideBar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const styles = useStyles(collapsed)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <Grid container sx={styles.root}>
      <Grid item>
        <IconButton onClick={onToggle} size={'small'}>
          <List />
        </IconButton>
        <Grid container flexDirection="column" marginTop={1} rowGap={2}>
          <AppLink to={RoutePath.game}>
            <Grid container columnGap={1}>
              <GameController size={26} />
              <Typography sx={styles.link}>Game</Typography>
            </Grid>
          </AppLink>
          <AppLink to={RoutePath.auth}>
            <Grid container columnGap={1}>
              <LockSimpleOpen size={26} />
              <Typography sx={styles.link}>Auth</Typography>
            </Grid>
          </AppLink>
          <AppLink to={RoutePath.signup}>
            <Grid container columnGap={1}>
              <SignIn size={26} />
              <Typography sx={styles.link}> Signup</Typography>
            </Grid>
          </AppLink>
          <AppLink to={RoutePath.leaderboard}>
            <Grid container columnGap={1}>
              <Crown size={26} />
              <Typography sx={styles.link}>Leaderboard</Typography>
            </Grid>
          </AppLink>
          <AppLink to={RoutePath.forum}>
            <Grid container columnGap={1}>
              <Table size={26} />
              <Typography sx={styles.link}>Forum</Typography>
            </Grid>
          </AppLink>
          <AppLink to={RoutePath.forum_messages}>
            <Grid container columnGap={1}>
              <Chat size={26} />
              <Typography sx={styles.link}>Messages</Typography>
            </Grid>
          </AppLink>

          <AppLink to={RoutePath.profile}>
            <Grid container columnGap={1}>
              <User size={26} />
              <Typography sx={styles.link}>Profile</Typography>
            </Grid>
          </AppLink>
          <AppLink to={RoutePath.settings}>
            <Grid container columnGap={1}>
              <Gear size={26} />
              <Typography sx={styles.link}>Settings</Typography>
            </Grid>
          </AppLink>
        </Grid>
      </Grid>
    </Grid>
  )
}
