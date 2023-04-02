import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '@/app/providers/store/config/store'
import { getUserInfoList } from '@/mappers/User'

export const authErrorReasonSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => auth.error && auth.error?.reason
)

export const isAuthUserSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => auth.auth
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
