import { createSlice } from '@reduxjs/toolkit'
import { getLeaderboards } from '@/services/leaderboard'
import { ILeaderBoardListResponse } from '@/shared/types/LiderBoard'
import { NonAutorizedResponse } from '@/shared/types/Errors'

interface LeaderboardSlice {
  leaderboardList: null | ILeaderBoardListResponse[]
  error: null | NonAutorizedResponse
}

const initialState: LeaderboardSlice = {
  leaderboardList: null,
  error: null,
}

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addMatcher(getLeaderboards.matchFulfilled, (state, { payload }) => {
      state.leaderboardList = payload
    })
  },
})

export const { reducer } = leaderboardSlice
