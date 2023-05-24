import React from 'react'
import { auth } from '../../firebase-config'

const EditImage: React.FC = () => {
  const user = auth.currentUser

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
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="Avatar"
              className="rounded-full w-full h-full object-contain opacity-70"
            />
          )}
          <img
            src="/src/assets/Camera.svg"
            width={30}
            alt=""
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
