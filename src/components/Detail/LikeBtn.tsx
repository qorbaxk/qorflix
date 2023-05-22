import React, { useEffect, useState } from 'react'
import { selectedMovieProps } from '../../redux/slice/detailSlice'

import { setDoc, doc, deleteDoc, getDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { dbService } from '../../firebase-config'

type LikeBtnProps = {
  movieObj: selectedMovieProps
}

const LikeBtn: React.FC<LikeBtnProps> = ({ movieObj }) => {
  const auth = getAuth()
  const [like, setLike] = useState<boolean>(false)

  const addBtn = async () => {
    setLike(true)
    if (auth.currentUser) {
      await setDoc(
        doc(dbService, auth.currentUser.uid, movieObj.title),
        movieObj,
      )
      console.log('추가')
    }
  }
  const deleteBtn = async () => {
    setLike(false)
    if (auth.currentUser) {
      await deleteDoc(doc(dbService, auth.currentUser.uid, movieObj.title))
      console.log('삭제')
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
      </div>
    </>
  )
}

export default LikeBtn
