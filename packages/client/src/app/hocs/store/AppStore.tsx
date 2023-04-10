import React, { ReactElement } from 'react'
import { store } from '@/app/providers/store/config/store'
import { Provider } from 'react-redux'

type AppStoreType = {
  children: ReactElement
  store: typeof store
}

export const AppStore = (
  { children, store }: AppStoreType
) => (
  <Provider store={store}>{children}</Provider>
)