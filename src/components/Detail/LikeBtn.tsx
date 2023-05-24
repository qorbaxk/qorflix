import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { selectedMovieProps } from '../../redux/slice/detailSlice'

import { setDoc, doc, deleteDoc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { dbService } from '../../firebase-config'

import Alert from '../Navigation/Alert'

type LikeBtnProps = {
  movieObj: selectedMovieProps
}

const LikeBtn: React.FC<LikeBtnProps> = ({ movieObj }) => {
  const auth = getAuth()
  const [like, setLike] = useState<boolean>(false)
  const [alert, setAlert] = useState(false)
  const isLoggedIn = useSelector(
    (userState: RootState) => userState.lg.isLoggedIn,
  )

  const addBtn = async () => {
    if (isLoggedIn === false) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 1000)
    } else {
      const now = new Date().getTime()
      const listObj = { ...movieObj, addTime: now }
      setLike(true)
      if (auth.currentUser) {
        await setDoc(
          doc(dbService, auth.currentUser.uid, movieObj.title),
          listObj,
        )
      }
    }
  }
  const deleteBtn = async () => {
    setLike(false)
    if (auth.currentUser) {
      await deleteDoc(doc(dbService, auth.currentUser.uid, movieObj.title))
    }
  }

  const existLikeList = async () => {
    if (auth.currentUser) {
      const userRef = doc(dbService, auth.currentUser.uid, movieObj.title)
      const userSnap = await getDoc(userRef)

      if (userSnap.exists()) {
        setLike(true)
      } else {
        setLike(false)
      }
    }
  }

  useEffect(() => {
    existLikeList()
  })

  return (
    <>
      <div className="flex flex-col items-center gap-2">
        {like ? (
          <button onClick={deleteBtn}>
            <img
              width={35}
              src="/src/assets/CheckBtn.svg"
              alt="찜한 상태 버튼"
            />
          </button>
        ) : (
          <button onClick={addBtn}>
            <img
              width={35}
              src="/src/assets/EmptyBtn.svg"
              alt="찜하지 않은 상태 버튼"
            />
          </button>
        )}
        <p className="text-sm text-neutral-400 ">찜한 콘텐츠</p>
        {alert ? <Alert text="로그인시 이용 가능 합니다." /> : ''}
      </div>
    </>
  )
}

export default LikeBtn
