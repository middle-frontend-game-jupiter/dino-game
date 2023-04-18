import { configureStore } from '@reduxjs/toolkit'
import { authModel } from '@/entities/auth'
import { leaderboardModel } from '@/entities/leaderboard'
import { api } from '@/services/api'
import { UserEntity } from '@/shared/types/User'

export const createStore = (
  auth = {} as {
    user: UserEntity,
    auth: boolean;
  },
) => {
  return configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: authModel.reducer,
      leaderboard: leaderboardModel.reducer,
    },
    preloadedState: {
      auth: { 
        ...auth,
        error: null,
      },
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
  })
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore()
