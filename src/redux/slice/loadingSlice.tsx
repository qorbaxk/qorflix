import { createSlice } from '@reduxjs/toolkit'

export interface loadingState {
  loading: boolean
}

const initialState: loadingState = {
  loading: true,
}

export const loadingSlice = createSlice({
  name: 'spinner',
  initialState,
  reducers: {
    falseLoading: state => {
      state.loading = false
    },
    trueLoading: state => {
      state.loading = true
    },
  },
})

export const { falseLoading, trueLoading } = loadingSlice.actions
export default loadingSlice.reducer
