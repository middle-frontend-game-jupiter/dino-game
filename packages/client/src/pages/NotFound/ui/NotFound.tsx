import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Typography } from '@mui/material'
import { RoutePath } from '@/shared/config'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

const NotFound: FC = () => {
  const styles = useStyles()

  return (
    <Grid container flexDirection='column' sx={styles.root}>
      <Typography variant='h4'>
        Not Found
      </Typography>
      <AppLink to={RoutePath.main}>Back to root page </AppLink>
    </Grid>
  )
}

export default NotFound
