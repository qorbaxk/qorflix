
import { createSlice } from '@reduxjs/toolkit'

export interface MovieState {
  popularMovies:{}
}

const initialState: MovieState = {
  popularMovies:{}
}

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMainMovies: (state, action) => {
      state.popularMovies = action.payload.popularMovies
    },
  },
})

export const { getMainMovies } = movieSlice.actions
export default movieSlice.reducer