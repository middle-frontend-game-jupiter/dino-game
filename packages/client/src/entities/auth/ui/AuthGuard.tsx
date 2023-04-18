import React, { useEffect } from 'react'
import { useGetUserMutation } from '@/services/auth'
import { Navigate } from 'react-router'
import { CircularProgress } from '@mui/material'
import { useAppSelector } from '@/app/hooks/redux'
import { isAuthUserSelector } from '../model/selectors'
import { RoutePath } from '@/shared/config'
import Grid from '@mui/material/Grid'

interface OwnProps {
  children: JSX.Element
}

export const AuthGuard = ({
  children,
}: OwnProps): JSX.Element | React.ReactElement => {
  const [getUser, { isError, isLoading }] = useGetUserMutation()

  const isAuth = useAppSelector(isAuthUserSelector)

  useEffect(() => {
    if (!isAuth) {
      getUser({})
    }
  }, [isAuth])

  if (isLoading) {
    return (
      <Grid container justifyContent={'center'} alignItems={'center'}>
        <CircularProgress />
      </Grid>
    )
  }

  if (isError) {
    return <Navigate to={RoutePath.auth} replace={true} />
  }

  return children
}
