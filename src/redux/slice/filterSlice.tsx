import { createSlice } from '@reduxjs/toolkit'

export const now = new Date().getFullYear()

export interface filterState {
  filter: number
  sort: string
  yearGroup: {
    minYear: number
    maxYear: number
  }
}

const initialState: filterState = {
  filter: 5,
  sort: 'revenue.desc',
  yearGroup: {
    minYear: 1990,
    maxYear: now,
  },
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
    getYear: (state, action) => {
      state.yearGroup = action.payload
    },
    getReset: state => {
      state.filter = initialState.filter
      state.sort = initialState.sort
      state.yearGroup = initialState.yearGroup
    },
  },
})

export const { getFilter, getSorting, getYear, getReset } = filterSlice.actions
export default filterSlice.reducer
