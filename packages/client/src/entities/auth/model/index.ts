import { reducer } from './authSlice'
import { authErrorReasonSelector, isAuthUserSelector, getUserSelector } from './selectors'

const selectors = {
  authErrorReasonSelector,
  isAuthUserSelector,
  getUserSelector
}

export { reducer, selectors }
