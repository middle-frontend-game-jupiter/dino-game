import { createSelector } from 'reselect'
import { getUserSelector } from '@/entities/auth/model/selectors'
import { getLeaderboardListSelector } from '@/entities/leaderboard/model/selectors'

export default createSelector(
  [getUserSelector, getLeaderboardListSelector],
  (user, leaderboardList) => ({
    user,
    score: leaderboardList?.[0]?.data?.dino_score || 0,
  })
)
