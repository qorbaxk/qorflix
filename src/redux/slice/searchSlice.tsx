import { createSlice } from '@reduxjs/toolkit'

export interface searchState {
  search: string
}

const initialState: searchState = {
  search: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { getSearch } = searchSlice.actions
export default searchSlice.reducer
