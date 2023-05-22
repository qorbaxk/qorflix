import { createSlice } from '@reduxjs/toolkit'
import { genreProps, oneMovieProps } from './movieSlice'

export interface companiesProps {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface trailerProps {
  id: string
  key: string
  name: string
  published_at: string
  size: number
  type: string
}

export interface authorProps {
  name: string
  username: string
  avatar_path: string
  rating: number
}
export interface reviewProps {
  author: string
  author_details: authorProps
  content: string
  created_at: string
  id: string
  updated_at: string
  url: string
}

export interface selectedMovieProps {
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
export interface detailMovieProps {
  selectedMovieInfo: selectedMovieProps
  trailerMovieInfo: trailerProps[]
  reviewMovieInfo: reviewProps[]
  recommendMovieInfo: oneMovieProps[]
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
  trailerMovieInfo: [
    {
      id: '',
      key: '',
      name: '',
      published_at: '',
      size: 0,
      type: '',
    },
  ],
  reviewMovieInfo: [
    {
      author: '',
      author_details: {
        name: '',
        username: '',
        avatar_path: '',
        rating: 0,
      },
      content: '',
      created_at: '',
      id: '',
      updated_at: '',
      url: '',
    },
  ],
  recommendMovieInfo: [
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

export const detailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    getSelectedMovie: (state, action) => {
      state.selectedMovieInfo = action.payload
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovieInfo = action.payload
    },
    getReviewsMovie: (state, action) => {
      state.reviewMovieInfo = action.payload
    },
    getRecommendMovie: (state, action) => {
      state.recommendMovieInfo = action.payload
    },
  },
})

export const {
  getSelectedMovie,
  getTrailerMovie,
  getReviewsMovie,
  getRecommendMovie,
} = detailSlice.actions
export default detailSlice.reducer
