import {configureStore} from "@reduxjs/toolkit"
import { AuthModel } from "@/entities/auth"

const store = configureStore({
  reducer: AuthModel.reducer
})

export default store