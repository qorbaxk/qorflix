import { createSlice } from '@reduxjs/toolkit'

export interface pageState {
  page: number
}

const initialState: pageState = {
  page: 1,
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    getPage: (state, action) => {
      state.page = action.payload
    },
  },
})

export const { getPage } = pageSlice.actions
export default pageSlice.reducer
