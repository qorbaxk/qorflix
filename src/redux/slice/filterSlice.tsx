import { createSlice } from '@reduxjs/toolkit'

export interface filterState {
  filter: number
  sort: string
}

const initialState: filterState = {
  filter: 5,
  sort: 'revenue.desc',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload
    },
    getSorting: (state, action) => {
      state.sort = action.payload
    },
  },
})

export const { getFilter, getSorting } = filterSlice.actions
export default filterSlice.reducer
