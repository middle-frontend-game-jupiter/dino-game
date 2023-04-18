import { configureStore, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { authModel } from '@/entities/auth'
import { leaderboardModel } from '@/entities/leaderboard'
import { appModel } from '@/entities/app'
import { api } from '@/services/api'

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState']
) =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      app: appModel.reducer,
      auth: authModel.reducer,
      leaderboard: leaderboardModel.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore()
