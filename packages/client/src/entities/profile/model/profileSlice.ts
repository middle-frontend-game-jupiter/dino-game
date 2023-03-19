import { createSlice } from '@reduxjs/toolkit'
import { updateAvatar, updatePassword } from '@/services/user'

interface UserSlice {
  avatar: null | string;
  error: null | string;
}

const initialState: UserSlice = {
  avatar: null,
  error: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(updateAvatar.matchFulfilled, (state, { payload }) => {
        state.avatar = payload.avatar;
      })
      .addMatcher(updatePassword.matchFulfilled, (state) => {
        state.error = null;
      })
  },
});

export const { reducer } = userSlice;
