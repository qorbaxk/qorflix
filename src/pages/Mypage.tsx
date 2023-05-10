import React from 'react'
import Logout from '../components/Mypage/Logout'
import Unsubscribing from '../components/Mypage/Unsubscribing'

const Mypage = () => {
  return (
    <div className='baseColor baseContainer flex flex-col items-center gap-4'>
      <Logout />
      <Unsubscribing/>
    </div>
  )
}

export default Mypage
