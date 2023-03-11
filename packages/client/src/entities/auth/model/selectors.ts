import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from 'app/hocs/store/store';

export const authErrorReasonSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => auth.error && auth.error?.reason 
)

export const isAuthUserSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => Boolean(auth.user) 
)