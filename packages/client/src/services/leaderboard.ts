import { api } from './api'
import {
  ILeaderBoardListRequest,
  ILeaderBoardListResponse,
} from '@/shared/types/LiderBoard'

export const leaderboardApi = api
  .enhanceEndpoints({ addTagTypes: ['leaderboardApi'] })
  .injectEndpoints({
    endpoints: builder => ({
      addLeaderboard: builder.mutation({
        query: credentials => ({
          url: 'leaderboard',
          method: 'POST',
          withCredentials: true,
          body: credentials,
        }),
      }),

      getLeaderboards: builder.mutation<
        ILeaderBoardListResponse[],
        ILeaderBoardListRequest
      >({
        query: credentials => ({
          url: 'leaderboard/all',
          method: 'POST',
          withCredentials: true,
          body: credentials,
        }),
      }),

      getTeamLeaderboards: builder.mutation({
        query: credentials => ({
          url: `leaderboard/${credentials.teamName}`,
          method: 'POST',
          withCredentials: true,
          body: credentials,
        }),
      }),
    }),
  })

export const {
  useAddLeaderboardMutation,
  useGetLeaderboardsMutation,
  useGetTeamLeaderboardsMutation,
} = leaderboardApi

export const {
  endpoints: { getLeaderboards, getTeamLeaderboards, addLeaderboard },
} = leaderboardApi
