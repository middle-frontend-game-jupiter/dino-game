import { createSelector } from '@reduxjs/toolkit'
import {
  authErrorReasonSelector,
  getServiceIdSelector,
  isAuthUserSelector,
} from '@/entities/auth/model/selectors'

export default createSelector(
  [isAuthUserSelector, authErrorReasonSelector, getServiceIdSelector],
  (isAuth, errorReason, code) => ({
    isAuth,
    errorReason,
    code,
  })
)
