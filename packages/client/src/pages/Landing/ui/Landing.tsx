import React, { FC, useEffect } from 'react'
import useStyles from './styles'
import Grid from '@mui/material/Grid'
import {
  REDIRECT_URI,
  useGetUserMutation,
  useOauthYandexMutation,
} from '@/services/auth'
import { useLocation } from 'react-router'

const Landing: FC = () => {
  const styles = useStyles()
  const location = useLocation()
  const code = new URLSearchParams(location.search).get('code')

  const [oauthYandex] = useOauthYandexMutation()
  const [userData] = useGetUserMutation()

  useEffect(() => {
    if (code) {
      oauthYandex({ code, redirect_uri: REDIRECT_URI }).then(() => {
        userData({})
      })
    }
  }, [code])

  return (
    <Grid container sx={styles.root}>
      landing
    </Grid>
  )
}

export default Landing
