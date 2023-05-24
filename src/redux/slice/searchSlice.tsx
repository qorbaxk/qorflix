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
    getSearchReset: state => {
      state.search = initialState.search
    },
  },
})

export const { getSearch, getSearchReset } = searchSlice.actions
export default searchSlice.reducer
