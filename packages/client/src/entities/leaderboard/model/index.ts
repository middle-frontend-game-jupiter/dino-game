import { reducer } from './leaderboardSlice'
import { authErrorReasonSelector, getLeaderboardSelector } from './selectors'

const selectors = {
  authErrorReasonSelector,
  getLeaderboardSelector,
}

export { reducer, selectors }
