import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/store/config/store'

export const getTheme = createSelector(
  (state: RootState) => state,
  state => state?.app.theme
)
