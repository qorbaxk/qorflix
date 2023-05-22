import React from 'react'
import EditImage from './EditImage'
import { auth } from '../../firebase-config'

const EditProfile:React.FC = () => {
  const user = auth.currentUser

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="a11y-hidden">유저 정보</h2>
      <EditImage />
      <p className="text-4xl font-bold">{user?.displayName}</p>
    </div>
  )
}

export default EditProfile
