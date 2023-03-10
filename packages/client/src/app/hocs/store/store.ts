import { configureStore, ConfigureStoreOptions } from "@reduxjs/toolkit"
import { AuthModel } from "@/entities/auth"
import { api } from "@/services/api"

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined
) => (
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      auth: AuthModel.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    ...options,
  })
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore();