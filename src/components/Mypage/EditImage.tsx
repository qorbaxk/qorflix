import React, { ChangeEvent, useEffect, useState } from 'react'
import { auth } from '../../firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getUserGroup } from '../../redux/slice/userSlice'

const EditImage: React.FC = () => {
  const user = auth.currentUser

  const userGroup = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )
  const { photoURL } = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )

  const dispatch = useDispatch()
  const [photo, setPhoto] = useState<string>(user?.photoURL as string)
  const [fileChange, setFileChange] = useState<boolean>(false)

  useEffect(() => {
    if (photoURL !== '' && !fileChange) {
      setPhoto(photoURL)
      setFileChange(true)
    } else if (photoURL === '') {
      setFileChange(true)
    }
  }, [photoURL])

  const onUpdatePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const theProfile = files[0]
      const reader = new FileReader()
      reader.onloadend = e => {
        const { result } = e.target as FileReader
        if (result) {
          const data = result as string
          setPhoto(data)
          dispatch(
            getUserGroup({
              ...userGroup,
              photoURL: data,
              photoName: theProfile.name,
            }),
          )
        }
      }
      reader.readAsDataURL(theProfile)
    }
  }

  return (
    <>
      <div className="w-32 h-32 relative">
        <label
          htmlFor="file-input"
          className="w-32 h-32 border border-4 border-white rounded-full cursor-pointer mb-4 absolute"
        >
          {user?.photoURL && (
            <img
              src={photo}
              alt="프로필 사진"
              className="rounded-full w-full h-full object-contain opacity-70"
            />
          )}
          <img
            aria-hidden
            src="/Camera.svg"
            width={30}
            alt="카메라 아이콘"
            className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
          />
        </label>
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }}
          onChange={onUpdatePhoto}
          className="z-30"
        />
      </div>
    </>
  )
}

export default EditImage
