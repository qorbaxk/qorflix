import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSelectedMovie } from '../redux/slice/detailSlice'

import OverView from '../components/Detail/OverView'
import { trueLoading, falseLoading } from '../redux/slice/loadingSlice'

const Detail: React.FC = () => {
  const { id } = useParams()
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  const dispatch = useDispatch()
  const getDetails = async () => {
    const detailMovieApi = api.get(
      `/movie/${id}?api_key=${API_KEY}&language=ko-KR`,
    )

    let [detailMovie] = await Promise.all([detailMovieApi])

    dispatch(getSelectedMovie(detailMovie.data))
    dispatch(falseLoading())
  }

  useEffect(() => {
    dispatch(trueLoading())
    getDetails()
  }, [])

  return (
    <div className="baseColor baseContainer">
      <OverView />
    </div>
  )
}

export default Detail
