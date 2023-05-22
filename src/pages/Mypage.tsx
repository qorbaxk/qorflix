import React from 'react'
import Logout from '../components/Mypage/Logout'
import Unsubscribing from '../components/Mypage/Unsubscribing'
import EditProfile from './../components/Mypage/EditProfile'

const Mypage: React.FC = () => {
  return (
    <div className="baseColor baseContainer flex flex-col items-center gap-4">
      <EditProfile />
      <Logout />
      <Unsubscribing />
    </div>
  )
}

export default Mypage
