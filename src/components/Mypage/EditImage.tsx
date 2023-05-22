import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const EditImage:React.FC = () => {
  const { photoURL } = useSelector(
    (userState: RootState) => userState.lg.userGroup,
  )

  const onUpdatePhoto = () => {
    console.log('업데이트')
  }

  return (
    <>
      <div className="w-32 h-32 relative">
        <label
          htmlFor="file-input"
          className="border border-4 border-white rounded-full cursor-pointer mb-4 absolute"
        >
          <img
            src={photoURL}
            alt="Avatar"
            className="rounded-full w-full h-full object-contain"
          />
        </label>
        <input
          id="file-input"
          type="file"
          style={{ display: 'none' }}
          onChange={onUpdatePhoto}
        />
      </div>
    </>
  )
}

export default EditImage
