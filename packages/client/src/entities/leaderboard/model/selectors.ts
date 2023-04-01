import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/store/config/store'

export const authErrorReasonSelector = createSelector(
  (state: RootState) => state,
  state => state.leaderboard.error && state.leaderboard.error?.reason
)

export const getLeaderboardListSelector = createSelector(
  (state: RootState) => state,
  state => state.leaderboard.leaderboardList
)

export const getLeaderboardSelector = createSelector(
  [getLeaderboardListSelector],
  leaderboardList => ({
    leaderboardList,
  })
)
