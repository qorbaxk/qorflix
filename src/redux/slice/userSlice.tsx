import { createSlice } from '@reduxjs/toolkit'

export interface userState {
  isLoggedIn: boolean
  userGroup: {
    uid: string
    name: string
    photoURL: string
    photoName: string
  }
}

const initialState: userState = {
  isLoggedIn: false,
  userGroup: {
    uid: '',
    name: '',
    photoURL: '',
    photoName: '',
  },
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
    getUserGroup: (state, action) => {
      state.userGroup = action.payload
    },
    resetUser: state => {
      state.userGroup = initialState.userGroup
    },
  },
})

export const { getLoggedIn, getLoggedOut, getUserGroup, resetUser } =
  userSlice.actions
export default userSlice.reducer
