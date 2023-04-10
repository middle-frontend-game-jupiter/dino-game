import React from 'react'
import { ErrorBoundary } from '@/app/providers/errorBoundary'

export const AppErrorBoundary = (
  { children }: { children: React.ReactNode | JSX.Element}
) => (
  <ErrorBoundary>{children}</ErrorBoundary>
)