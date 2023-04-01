import React, { useEffect } from 'react'
import { Navigate } from 'react-router'
import { CircularProgress } from '@mui/material'
import { RoutePath } from '@/shared/config'
import { useAppSelector } from '@/app/hooks/redux'
import { isAuthUserSelector } from '@/entities/auth/model/selectors'
import { useGetLeaderboardsMutation } from '@/services/leaderboard'
import { RATING_FIELD_NAME, TEAM_NAME } from '@/game/utils/constants'

interface OwnProps {
  children: JSX.Element
}

export const LeaderboardGuard = ({
  children,
}: OwnProps): JSX.Element | React.ReactElement => {
  const [leaderboardQuery, { isError, isLoading }] =
    useGetLeaderboardsMutation()

  const isAuth = useAppSelector(isAuthUserSelector)

  useEffect(() => {
    if (!isAuth) {
      leaderboardQuery({
        ratingFieldName: RATING_FIELD_NAME,
        teamName: TEAM_NAME,
        cursor: 0,
        limit: 100,
      })
    }
  }, [isAuth])

  if (isLoading) {
    return <CircularProgress />
  }

  if (isError) {
    return <Navigate to={RoutePath.auth} replace={true} />
  }

  return children
}
