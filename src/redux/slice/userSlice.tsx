import { createSlice } from '@reduxjs/toolkit'

export interface userState {
  isLoggedIn: boolean
  uid: string
  name: string
}

const initialState: userState = {
  isLoggedIn: false,
  uid: '',
  name: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getLoggedIn: state => {
      state.isLoggedIn = true
    },
    getLoggedOut: state => {
      state.isLoggedIn = false
    },
    getUid: (state, action) => {
      state.uid = action.payload
    },
    getName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { getLoggedIn, getLoggedOut, getUid, getName } = userSlice.actions
export default userSlice.reducer
