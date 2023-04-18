import React, { useEffect } from 'react'
import { Navigate } from 'react-router'
import { CircularProgress } from '@mui/material'
import { RoutePath } from '@/shared/config'
import { useGetLeaderboardsMutation } from '@/services/leaderboard'
import { RATING_FIELD_NAME, TEAM_NAME } from '@/game/utils/constants'
import Grid from '@mui/material/Grid'

interface OwnProps {
  children: JSX.Element
}

export const LeaderboardGuard = ({
  children,
}: OwnProps): JSX.Element | React.ReactElement => {
  const [leaderboardQuery, { isError, isLoading }] =
    useGetLeaderboardsMutation()

  useEffect(() => {
    leaderboardQuery({
      ratingFieldName: RATING_FIELD_NAME,
      teamName: TEAM_NAME,
      cursor: 0,
      limit: 100,
    })
  }, [])

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
