import React from 'react'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <div className='bg-black'>
      <nav className="baseColor max-w-scr mx-auto flex flex-row items-center justify-between py-4 px-32">
        <div className="flex flex-row items-center gap-10">
          <Link to="/" aria-label="메인 홈 바로가기">
            <h1>
              <img src="/src/assets/Logo.svg" alt="넷플릭스 메인 로고" />
            </h1>
          </Link>
          <Link to="/movies" aria-label="전체 영화 보러가기">
            전체 영화
          </Link>
          <Link to="/favorite" aria-label="내가 찜한 영화 보러가기">
            찜한 영화
          </Link>
        </div>
        <div>
          <Link to="/login" aria-label="로그인 하러가기">
            로그인
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
