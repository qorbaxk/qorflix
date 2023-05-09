import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import {
  getLoggedIn,
  getLoggedOut,
  getName,
  getUid,
} from '../../redux/slice/userSlice'
import { auth, dbService } from '../../firebase-config'
import { RootState } from '../../redux/store'
import { collection, getDocs, query, where } from 'firebase/firestore'

const Navigation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { uid, name } = useSelector((userState: RootState) => userState.lg)
  const dispatch = useDispatch()

  const getUser = async () => {
    const docRef = query(
      collection(dbService, 'userInfo'),
      where('creatorID', '==', uid),
    )
    const docSnap = await getDocs(docRef)
    dispatch(getName(docSnap.docs[0].data().userNickName))
  }

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, user => {
      if (user) {
        setIsLoggedIn(true)
        dispatch(getLoggedIn())
        dispatch(getUid(user.uid))
        getUser()
      } else {
        setIsLoggedIn(false)
        dispatch(getLoggedOut())
      }
    })
  }, [auth])

  return (
    <div className="bg-black z-100">
      <nav className="baseColor max-w-scr mx-auto flex flex-row items-center justify-between py-4 px-32">
        <div className="flex flex-row items-center gap-10">
          <Link to="/" aria-label="메인 홈 바로가기" className="cursor-pointer">
            <h1>
              <img src="/src/assets/Logo.svg" alt="넷플릭스 메인 로고" />
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
          >
            찜한 영화
          </Link>
        </div>
        <div>
          {isLoggedIn ? (
            <Link
              to="/mypage"
              aria-label="마이페이지 가기"
              className="cursor-pointer"
            >
              {`${name} 님`}
            </Link>
          ) : (
            <Link
              to="/login"
              aria-label="로그인 하러가기"
              className="cursor-pointer"
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
