import { createSlice } from '@reduxjs/toolkit'

export interface filterState {
  filter: number
}

const initialState: filterState = {
  filter: 1,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload
    },
  },
})

export const { getFilter } = filterSlice.actions
export default filterSlice.reducer
