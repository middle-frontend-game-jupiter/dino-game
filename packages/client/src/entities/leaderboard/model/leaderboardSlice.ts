import { createSlice } from '@reduxjs/toolkit'
import { getLeaderboards } from '@/services/leaderboard'
import { ILeaderBoardListResponse } from '@/shared/types/LiderBoard'

interface LeaderboardSlice {
  leaderboardList: null | ILeaderBoardListResponse[]
}

const initialState: LeaderboardSlice = {
  leaderboardList: null,
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
