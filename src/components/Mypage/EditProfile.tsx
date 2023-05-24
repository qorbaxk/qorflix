import React, { useState } from 'react'
import EditImage from './EditImage'
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, updateProfile } from 'firebase/auth'
import { getUserGroup } from '../../redux/slice/userSlice'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { storageService } from '../../firebase-config'

const EditProfile: React.FC = () => {
  const auth = getAuth()
  const dispatch = useDispatch()
  const users = useSelector((userState: RootState) => userState.lg.userGroup)
  const [text, setText] = useState(auth.currentUser?.displayName as string)

  const goEdit = async () => {
    if (auth.currentUser && auth.currentUser.displayName !== text) {
      await updateProfile(auth.currentUser, {
        displayName: text,
      })
      dispatch(
        getUserGroup({
          ...users,
          name: text,
        }),
      )
    }

    if (auth.currentUser && auth.currentUser.photoURL !== users.photoURL) {
      const imgRef = ref(
        storageService,
        `userImg/${auth.currentUser.uid}/${users.photoName}`,
      )
      const response = await uploadString(imgRef, users.photoURL, 'data_url')
      const imgUrl = await getDownloadURL(response.ref)

      Promise.all([response, imgUrl]).then(async imgUrl => {
        if (auth.currentUser) {
          await updateProfile(auth.currentUser, {
            photoURL: imgUrl[1],
          })
          dispatch(
            getUserGroup({
              ...users,
              photoURL: imgUrl[1],
            }),
          )
        }
      })
    }
  }

  return (
    <div className="flex flex-col items-center gap-4 w-96">
      <h2 className="a11y-hidden">유저 정보</h2>
      <EditImage />
      <div className="flex flex-row gap-4 items-end justify-between w-full">
        <span
          role="text"
          className="text-xs  border-b-[1px] border-white border-solid p-2"
        >
          닉네임
        </span>
        <input
          type="text"
          aria-label="바꿀 닉네임 입력창 및 현재 닉네임"
          className="text-2xl font-bold bg-black border-b-[1px] border-white border-solid p-2 grow"
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </div>
      <button
        role="submit"
        className="cursor-pointer w-full h-14 bg-neutral-800 hover:bg-primary-100"
        onClick={goEdit}
      >
        수정하기
      </button>
    </div>
  )
}

export default EditProfile
