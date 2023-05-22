import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { dbService } from '../firebase-config'
import { getAuth } from 'firebase/auth'
import GridCard from '../components/Favorite/GridCard'
import FilterOptions from '../components/Favorite/FilterOptions'

type listProps = { id: string }[]

const Favorite = () => {
  const auth = getAuth()
  const [myLists, setMyLists] = useState<listProps>([])
  const getList = () => {
    if (auth.currentUser) {
      const q = query(collection(dbService, auth.currentUser.uid))
      onSnapshot(q, snapshot => {
        const myListArr = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }))
        setMyLists(myListArr)
      })
    }
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <div className="baseColor baseContainer px-32">
      <h2 className="a11y-hidden">찜한 영화</h2>
      <FilterOptions/>
      <GridCard movie={myLists} />
    </div>
  )
}

export default Favorite
