import React, { useEffect, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getUserGroup } from '../../redux/slice/userSlice'

const RegisterImage: React.FC = () => {
  const userGroup = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )
  const { photoURL } = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState<string>('')
  const [fileChange, setFileChange] = useState<boolean>(false)

  useEffect(() => {
    if (photoURL !== '' && !fileChange) {
      setPhoto(photoURL)
      setFileChange(true)
    } else if (photoURL === '') {
      setFileChange(true)
    }
  }, [photoURL])

  const onUploadPhoto = (e: ChangeEvent<HTMLInputElement>) => {
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
      <label
        htmlFor="file-input"
        className="border border-4 border-white w-32 h-32 rounded-full cursor-pointer relative mb-4"
      >
        <img
          src={photo ? photo : `/src/assets/Camera.svg`}
          alt="Avatar"
          className={`${
            photo
              ? `w-full h-full`
              : `w-8 h-8 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] object-cover object-center `
          } rounded-full`}
        />
      </label>
      <input
        id="file-input"
        type="file"
        style={{ display: 'none' }}
        onChange={onUploadPhoto}
      />
    </>
  )
}

export default RegisterImage
