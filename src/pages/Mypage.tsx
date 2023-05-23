import React from 'react'
import Logout from '../components/Mypage/Logout'
import Unsubscribing from '../components/Mypage/Unsubscribing'
import EditProfile from './../components/Mypage/EditProfile'

const Mypage: React.FC = () => {
  return (
    <div className="baseColor baseContainer flex flex-col items-center justify-around">
      <div>
        <EditProfile />
      </div>
      <div className='flex flex-col gap-4'>
        <Logout />
        <Unsubscribing />
      </div>
    </div>
  )
}

export default Mypage
