import React from 'react'
import { store } from '@/app/providers/store/config/store'
import { Provider } from 'react-redux'

const withStore = (component: () => React.ReactNode | JSX.Element) => () =>
  <Provider store={store}>{component()}</Provider>

export default withStore
