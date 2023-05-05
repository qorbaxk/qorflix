import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slice/movieSlice'
import loadingReducer from './slice/loadingSlice'
import detailSlice from './slice/detailSlice'

export const store = configureStore({
  reducer: {
    mv: movieReducer,
    ld: loadingReducer,
    dt: detailSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
