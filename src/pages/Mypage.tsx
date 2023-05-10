import React from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Mypage = () => {
  const navigate = useNavigate()

  const gotoLogout = () => {
    const auth = getAuth()
    auth.signOut()
    navigate('/')
  }

  return (
    <div>
      <button
        role="button"
        onClick={gotoLogout}
        aria-label="로그아웃 하기"
        className="cursor-pointer"
      >
        로그아웃
      </button>
    </div>
  )
}

export default Mypage
