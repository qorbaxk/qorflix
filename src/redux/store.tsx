import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slice/movieSlice'
import loadingReducer from './slice/loadingSlice'

export const store = configureStore({
  reducer: {
    mv: movieReducer,
    ld: loadingReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
