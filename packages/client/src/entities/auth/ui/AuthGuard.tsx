import React, { useEffect } from 'react';
import { useMeMutation } from '@/services/auth';
import { CircularProgress } from '@mui/material';
import { useAppSelector } from '@/app/hooks/redux';
import { isAuthUserSelector } from '../model/selectors';
import { AuthPage } from '@/pages/Auth'

interface OwnProps {
  children: JSX.Element;
}

export const AuthGuard = ({ children }: OwnProps): JSX.Element | React.ReactElement => {
  const [userQuery, { isError, isLoading }] = useMeMutation()

  const isAuth = useAppSelector(isAuthUserSelector)

  useEffect(() => {
    userQuery({})
  }, [isAuth])

  if(isLoading) {
    return <CircularProgress />
  }

  if(isError) {
    return <AuthPage/>
  }

  return children
}