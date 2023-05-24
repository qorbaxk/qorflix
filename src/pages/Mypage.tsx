import React from 'react'
import Logout from '../components/Mypage/Logout'
import Unsubscribing from '../components/Mypage/Unsubscribing'
import EditProfile from './../components/Mypage/EditProfile'

const Mypage: React.FC = () => {
  return (
    <div className="baseColor baseContainer flex flex-col items-center  justify-start gap-32">
      <div className="">
        <EditProfile />
      </div>
      <div className="shrink-0 flex flex-col gap-4">
        <Logout />
        <Unsubscribing />
      </div>
    </div>
  )
}

export default Mypage
