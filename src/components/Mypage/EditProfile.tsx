import React, { useState } from 'react'
import EditImage from './EditImage'
import { RootState } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { getAuth, updateProfile } from 'firebase/auth'
import { getUserGroup } from '../../redux/slice/userSlice'

const EditProfile: React.FC = () => {
  const auth = getAuth()
  const dispatch = useDispatch()
  const users = useSelector((userState: RootState) => userState.lg.userGroup)
  const [text, setText] = useState(users.name)

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
  }

  return (
    <div className="flex flex-col items-center gap-4 w-96">
      <h2 className="a11y-hidden">유저 정보</h2>
      <EditImage />
      <div className="flex flex-row gap-4 items-end justify-between w-full">
        <span className="text-xs  border-b-[1px] border-white border-solid p-2">
          닉네임
        </span>
        <input
          type="text"
          className="text-2xl font-bold bg-black border-b-[1px] border-white border-solid p-2 grow"
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </div>
      <button
        className="cursor-pointer w-full h-14 bg-neutral-800 hover:bg-primary-100"
        onClick={goEdit}
      >
        수정하기
      </button>
    </div>
  )
}

export default EditProfile
