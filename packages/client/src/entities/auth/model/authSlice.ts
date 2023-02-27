import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

const { reducer } = authSlice

export {
  reducer,
};