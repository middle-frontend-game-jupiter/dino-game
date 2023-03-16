import { reducer } from './authSlice'
import { authErrorReasonSelector, isAuthUserSelector } from './selectors'

const selectors = {
  authErrorReasonSelector,
  isAuthUserSelector,
}

export { reducer, selectors }
