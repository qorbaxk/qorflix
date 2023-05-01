import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slice/movieSlice'

export const store = configureStore({
  reducer: {
    mv: movieReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
