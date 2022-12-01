import { configureStore } from '@reduxjs/toolkit'

import { inject } from 'api/auth/config'
import authReducer, { setToken } from 'store/slices/authSlice'

const store = configureStore({
  reducer: {
    authState: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

inject(store, setToken)

export default store
