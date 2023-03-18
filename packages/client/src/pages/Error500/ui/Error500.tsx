import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Typography } from '@mui/material'
import { RoutePath } from '@/shared/config'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

const Error500: FC = () => {
  const styles = useStyles()

  return (
    <Grid container flexDirection="column" sx={styles.root}>
      <Typography variant="h4">500 Internal Server Error</Typography>
      <Typography variant="h5">We're already fixing it.</Typography>
      <AppLink to={RoutePath.main}>Back to root page </AppLink>
    </Grid>
  )
}

export default Error500
