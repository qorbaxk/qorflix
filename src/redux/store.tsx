import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './slice/movieSlice'
import loadingReducer from './slice/loadingSlice'
import detailSlice from './slice/detailSlice'
import creditSlice from './slice/creditSlice'

export const store = configureStore({
  reducer: {
    mv: movieReducer,
    ld: loadingReducer,
    dt: detailSlice,
    cd: creditSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
