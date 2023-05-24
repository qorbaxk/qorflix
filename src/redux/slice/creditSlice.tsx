import { createSlice } from '@reduxjs/toolkit'

export interface castProps {
  adult: boolean
  cast_id: number
  character: string
  credit_id: string
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
}

export interface crewProps {
  adult: boolean
  credit_id: string
  department: string
  gender: number
  id: number
  job: string
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
}

export interface creditState {
  creditInfo: {
    cast: castProps[]
    crew: crewProps[]
    id: number
  }
}

const initialState: creditState = {
  creditInfo: {
    cast: [
      {
        adult: false,
        cast_id: 0,
        character: '',
        credit_id: '',
        gender: 0,
        id: 0,
        known_for_department: '',
        name: '',
        original_name: '',
        popularity: 0,
        profile_path: '',
      },
    ],
    crew: [
      {
        adult: false,
        credit_id: '',
        department: '',
        gender: 0,
        id: 0,
        job: '',
        known_for_department: '',
        name: '',
        original_name: '',
        popularity: 0,
        profile_path: '',
      },
    ],
    id: 0,
  },
}

export const creditSlice = createSlice({
  name: 'credit',
  initialState,
  reducers: {
    getCredits: (state, action) => {
      state.creditInfo = action.payload
    },
  },
})

export const { getCredits } = creditSlice.actions
export default creditSlice.reducer
