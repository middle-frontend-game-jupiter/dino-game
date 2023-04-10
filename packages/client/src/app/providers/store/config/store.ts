import { configureStore } from '@reduxjs/toolkit'
import { authModel } from '@/entities/auth'
import { leaderboardModel } from '@/entities/leaderboard'
import { api } from '@/services/api'

export const createStore = (
  user?: any,
) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authModel.reducer,
      leaderboard: leaderboardModel.reducer,
    },
    preloadedState: {
      auth: { 
        ...user
      },

      leaderboard: {
        leaderboardList: [],
        error: null 
      },
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
  })
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore()
