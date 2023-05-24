import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { useDispatch } from 'react-redux'
import { getReset } from '../../redux/slice/filterSlice'
import { getSearchReset } from '../../redux/slice/searchSlice'

export type naviProps = {
  isLoggedIn: boolean
}

const Navigation: React.FC<naviProps> = ({ isLoggedIn }) => {
  const user = auth.currentUser
  const dispatch = useDispatch()

  const filterReset = () => {
    dispatch(getReset())
    dispatch(getSearchReset())
  }

  return (
    <div className="bg-black z-100">
      <nav className="baseColor max-w-scr mx-auto flex flex-row items-center justify-between py-4 px-32">
        <div className="flex flex-row items-center gap-10">
          <Link
            to="/"
            aria-label="메인 홈 바로가기"
            className="cursor-pointer"
            onClick={filterReset}
          >
            <h1>
              <img src="/Logo.svg" alt="넷플릭스 메인 로고" />
            </h1>
          </Link>
          <Link
            to="/movies"
            aria-label="전체 영화 보러가기"
            className="cursor-pointer"
          >
            전체 영화
          </Link>
          <Link
            to="/favorite"
            aria-label="내가 찜한 영화 보러가기"
            className="cursor-pointer"
            onClick={filterReset}
          >
            찜한 영화
          </Link>
        </div>
        <div>
          {isLoggedIn && user?.displayName && user?.photoURL ? (
            <Link
              to="/mypage"
              aria-label="마이페이지 가기"
              className="cursor-pointer flex flex-row gap-2 items-center"
              onClick={filterReset}
            >
              <img
                src={user.photoURL}
                alt="프로필 사진"
                className="rounded-full w-6 h-6 object-cover object-center"
              />

              <span>{`${user.displayName} 님`}</span>
            </Link>
          ) : (
            <Link
              to="/login"
              aria-label="로그인 하러가기"
              className="cursor-pointer"
              onClick={filterReset}
            >
              로그인
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navigation
