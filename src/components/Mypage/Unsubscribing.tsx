import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { deleteUser } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { getLoggedOut, resetUser } from '../../redux/slice/userSlice'

const Unsubscribing = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const gotoUnSub = () => {
    const user = auth.currentUser
    if (user) {
      deleteUser(user)
      dispatch(resetUser())
      dispatch(getLoggedOut())
      navigate('/')
    }
  }

  return (
    <div>
      <button
        role="button"
        onClick={gotoUnSub}
        aria-label="회원탈퇴하기"
        className="cursor-pointer w-96 h-10 bg-zinc-400 "
      >
        회원탈퇴
      </button>
    </div>
  )
}

export default Unsubscribing
