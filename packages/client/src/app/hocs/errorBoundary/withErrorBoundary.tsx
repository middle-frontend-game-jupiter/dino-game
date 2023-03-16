import React from 'react'
import { ErrorBoundary } from '@/app/providers/errorBoundary'

const withErrorBoundary =
  (component: () => React.ReactNode | JSX.Element) => () =>
    <ErrorBoundary>{component()}</ErrorBoundary>

export default withErrorBoundary
