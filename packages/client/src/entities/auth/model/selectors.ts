import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '@/app/providers/Store/config/store'
import { getUserInfoList } from '@/mappers/User'

export const authErrorReasonSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => auth.error && auth.error?.reason
)

export const isAuthUserSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => Boolean(auth.user)
)

export const getUserSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => auth.user
)

export const getInfoListSelector = createSelector([getUserSelector], user => {
  return getUserInfoList(user)
})

export const getProfileSelector = createSelector(
  [getInfoListSelector, getUserSelector],
  (infoList, user) => ({
    infoList,
    user,
  })
)
