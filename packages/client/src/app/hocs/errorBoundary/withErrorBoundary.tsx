import React from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/providers/Store/config/store'

const withErrorBoundary =
  (component: () => React.ReactNode | JSX.Element) => () =>
    <Provider store={store}>{component()}</Provider>

export default withErrorBoundary
