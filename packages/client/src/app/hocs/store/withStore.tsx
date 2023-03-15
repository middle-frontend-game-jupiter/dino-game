import React from 'react'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'

const withStore = (component: () => React.ReactNode | JSX.Element) => () =>
  <ErrorBoundary>{component()}</ErrorBoundary>

export default withStore
