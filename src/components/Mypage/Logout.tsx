import React from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetUser } from '../../redux/slice/userSlice'

const Logout:React.FC = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const gotoLogout = () => {
    const auth = getAuth()
    auth.signOut()
    dispatch(resetUser())
    navigate('/')
  }

  return (
    <div>
      <button
        role="button"
        onClick={gotoLogout}
        aria-label="로그아웃 하기"
        className="cursor-pointer w-96 h-14 bg-primary-100 "
      >
        로그아웃
      </button>
    </div>
  )
}

export default Logout
