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
export interface genreProps {
  id: number
  name: string
}
export interface MovieState {
  popularMovies: oneMovieProps[]
  upComingMovies: oneMovieProps[]
  nowPlayingMovies: oneMovieProps[]
  allTimeMovies: oneMovieProps[]
  searchMovies: oneMovieProps[]
  genreList: genreProps[]
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
  upComingMovies: [
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
  nowPlayingMovies: [
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
  allTimeMovies: [
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
  searchMovies: [
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
  genreList: [
    {
      id: 0,
      name: '',
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
    getComingMovies: (state, action) => {
      state.upComingMovies = action.payload.upComingMovies
    },
    getPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload.nowPlayingMovies
    },
    getGenreList: (state, action) => {
      state.genreList = action.payload.genreList
    },
    getAllTimeMovies: (state, action) => {
      state.allTimeMovies = action.payload.allTimeMovies
    },
    getSearchMovies: (state, action) => {
      state.searchMovies = action.payload.searchMovies
    },
  },
})

export const {
  getMainMovies,
  getComingMovies,
  getPlayingMovies,
  getAllTimeMovies,
  getSearchMovies,
  getGenreList,
} = movieSlice.actions
export default movieSlice.reducer
