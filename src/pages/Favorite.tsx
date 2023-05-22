import React, { useEffect, useState } from 'react'
import { DocumentData, collection, onSnapshot, query } from 'firebase/firestore'
import { dbService } from '../firebase-config'
import { getAuth } from 'firebase/auth'
import GridCard from '../components/Favorite/GridCard'
import FilterOptions from '../components/Favorite/FilterOptions'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { ClipLoader } from 'react-spinners'
import { genreProps } from '../redux/slice/movieSlice'
import { falseLoading, trueLoading } from '../redux/slice/loadingSlice'

export type movieProps = {
  id: number
  addTime: number
  adult: boolean
  backdrop_path: string
  genres: genreProps[]
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  revenue: number
  status: string
  tagline: string
  title: string
  vote_average: number
  vote_count: number
}

export type listProps = {
  movie: movieProps[]
}

const Favorite = () => {
  const auth = getAuth()
  const dispatch = useDispatch()
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )
  const [myLists, setMyLists] = useState<movieProps[]>([])
  const getList = () => {
    if (auth.currentUser) {
      const q = query(collection(dbService, auth.currentUser.uid))
      onSnapshot(q, snapshot => {
        const myListArr = snapshot.docs.map((doc: DocumentData) => ({
          ...doc.data(),
        }))
        setMyLists(myListArr)
        dispatch(falseLoading())
      })
    }
  }

  useEffect(() => {
    dispatch(trueLoading())
    getList()
  }, [])

  if (loading) {
    return (
      <div
        className="flex justify-center items-center bg-black min-h-screen"
        role="alert"
        aria-busy="true"
        aria-live="polite"
        aria-label="로딩중"
      >
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    )
  }
  return (
    <div className="baseColor baseContainer px-32">
      <h2 className="a11y-hidden">찜한 영화</h2>
      <FilterOptions />
      <GridCard movie={myLists} />
    </div>
  )
}

export default Favorite
