import { createSlice } from '@reduxjs/toolkit'
import { genreProps } from './movieSlice'

export interface companiesProps {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface detailMovieProps {
  selectedMovieInfo: {
    adult: boolean
    backdrop_path: string
    budget: number
    genres: genreProps[]
    id: number
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: companiesProps[]
    release_date: string
    revenue: number
    runtime: number
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
  }
}

const initialState: detailMovieProps = {
  selectedMovieInfo: {
    adult: false,
    backdrop_path: '',
    budget: 0,
    genres: [
      {
        id: 0,
        name: '',
      },
    ],
    id: 0,
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [
      { id: 0, logo_path: '', name: '', origin_country: '' },
    ],
    release_date: '',
    revenue: 0,
    runtime: 0,
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0,
  },
}

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getSelectedMovie: (state, action) => {
      state.selectedMovieInfo = action.payload
    },
  },
})

export const { getSelectedMovie } = detailSlice.actions
export default detailSlice.reducer