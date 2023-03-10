import { me, signIn } from '@/services/auth';
import { createSelector, createSlice } from '@reduxjs/toolkit'
import { NonAutorizedResponse } from '@/shared/types/Errors';
import { ApiStatuses } from '@/shared/types/ApiStatuses';
import { RootState } from '@/app/hocs/store/store';
import { UserEntity } from '@/shared/types/User';

interface AuthSlice {
  user: null | UserEntity;
  error: null | NonAutorizedResponse;
}

const initialState: AuthSlice = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(me.matchFulfilled, (state, { payload }) => {
        state.user = payload;
      })
      .addMatcher(signIn.matchRejected, (state, { payload }) => {
        const { reason } = payload?.data as NonAutorizedResponse;

        if(payload?.status === ApiStatuses.UNAUTORIZED) {
          state.error = {
            status: ApiStatuses.UNAUTORIZED,
            reason
          }
        }
      })
  }
})

export const authErrorReasonSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => auth.error && auth.error?.reason 
)

export const isAuthUserSelector = createSelector(
  (state: RootState) => state,
  ({ auth }) => Boolean(auth.user) 
)

export const { reducer } = authSlice