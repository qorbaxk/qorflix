import './App.css'
import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import {
  getLoggedIn,
  getLoggedOut,
  getUserGroup,
} from '../../redux/slice/userSlice'
import { auth } from '../../firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import Home from '../../pages/Home'
import Movies from '../../pages/Movies'
import Navigation from '../../components/Navigation/Navigation'
import Detail from '../../pages/Detail'
import Login from '../../pages/Login'
import Favorite from '../../pages/Favorite'
import Register from '../../pages/Register'
import Mypage from '../../pages/Mypage'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const dispatch = useDispatch()
  const userGroup = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true)
        dispatch(getLoggedIn())
        dispatch(
          getUserGroup({
            ...userGroup,
            uid: user.uid,
            name: user.displayName,
            photoURL: user.photoURL,
          }),
        )
      } else {
        setIsLoggedIn(false)
        dispatch(getLoggedOut())
      }
    })
  }, [auth.currentUser])

  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movies/:id" element={<Detail />} />
      </Routes>
    </>
  )
}

export default App
