import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSelectedMovie } from '../redux/slice/detailSlice'
import { getCredits } from '../redux/slice/creditSlice'
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
    const creditMovieApi = api.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`,
    )

    let [detailMovie, creditMovie] = await Promise.all([detailMovieApi, creditMovieApi])

    dispatch(getSelectedMovie(detailMovie.data))
    dispatch(getCredits(creditMovie.data))
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
