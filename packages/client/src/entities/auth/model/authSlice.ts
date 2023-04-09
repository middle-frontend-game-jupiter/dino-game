import { getServiceId, getUser, signIn } from '@/services/auth'
import { createSlice } from '@reduxjs/toolkit'
import { NonAutorizedResponse } from '@/shared/types/Errors'
import { ApiStatuses } from '@/shared/types/ApiStatuses'
import { UserEntity } from '@/shared/types/User'
import { UserMapper } from '@/mappers/User'

interface AuthSlice {
  user: null | UserEntity
  error: null | NonAutorizedResponse
  auth: boolean
  serviceId: string | null
}

const initialState: AuthSlice = {
  user: null,
  error: null,
  auth: false,
  serviceId: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(getUser.matchFulfilled, (state, { payload }) => {
        state.user = UserMapper.toView(payload)
      })
      .addMatcher(signIn.matchRejected, (state, { payload }) => {
        const { reason } = payload?.data as NonAutorizedResponse

        if (payload?.data === 'OK') {
          state.auth = true
        } else {
          state.auth = false
          state.error = {
            status: ApiStatuses.UN_AUTHORIZED,
            reason,
          }
        }
      })
      .addMatcher(getServiceId.matchFulfilled, (state, { payload }) => {
        state.serviceId = payload.service_id
      })
  },
})

export const { reducer } = authSlice
