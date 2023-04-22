import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MODE } from '@/app/styles/variables/global'

interface AppSlice {
  theme: MODE
}

const initialState: AppSlice = {
  theme: MODE.DARK,
}

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<MODE>) => {
      state.theme = action.payload
    },
  },
})

export const { setTheme } = appSlice.actions

export const { reducer } = appSlice
