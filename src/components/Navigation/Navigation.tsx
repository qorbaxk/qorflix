import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav className="baseColor flex flex-row items-center justify-between p-4">
        <div className='flex flex-row items-center gap-10'>
          <Link to="/">
            <h1>
              <img src="/src/assets/Logo.svg" alt="넷플릭스 메인 로고" />
            </h1>
          </Link>
          <Link to="/movies">전체 영화</Link>
          <Link to="/favorite">찜한 영화</Link>
        </div>
        <div>
          <Link to="/login">로그인</Link>
        </div>
      </nav>
    </>
  )
}

export default Navigation
