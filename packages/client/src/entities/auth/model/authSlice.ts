import { createSlice } from '@reduxjs/toolkit'
import { me, signIn } from '@/services/auth'
import { NonAutorizedResponse } from '@/shared/types/Errors'
import { ApiStatuses } from '@/shared/types/ApiStatuses'
import { UserEntity } from '@/shared/types/User'
import { UserMapper } from '@/mappers/User'

interface AuthSlice {
  user: null | UserEntity
  error: null | NonAutorizedResponse
}

const initialState: AuthSlice = {
  user: null,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(me.matchFulfilled, (state, { payload }) => {
        state.user = UserMapper.toView(payload)
      })
      .addMatcher(signIn.matchRejected, (state, { payload }) => {
        const { reason } = payload?.data as NonAutorizedResponse

        if (payload?.status === ApiStatuses.UN_AUTHORIZED) {
          state.error = {
            status: ApiStatuses.UN_AUTHORIZED,
            reason,
          }
        }
      })
  },
})

export const { reducer } = authSlice
