import { createSlice } from '@reduxjs/toolkit'

export interface oneMovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}
export interface MovieState {
  popularMovies: oneMovieProps[]
}

const initialState: MovieState = {
  popularMovies: [
    {
      adult: false,
      backdrop_path: '',
      genre_ids: [0],
      id: 0,
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      release_date: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
    },
  ],
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
