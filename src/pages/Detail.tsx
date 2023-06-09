import React, { useEffect } from 'react'
import api from '../redux/api'
import ClipLoader from 'react-spinners/ClipLoader'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { RootState } from '../redux/store'
import {
  getRecommendMovie,
  getReviewsMovie,
  getSelectedMovie,
  getTrailerMovie,
} from '../redux/slice/detailSlice'
import { getCredits } from '../redux/slice/creditSlice'
import { trueLoading, falseLoading } from '../redux/slice/loadingSlice'
import { getGenreList } from '../redux/slice/movieSlice'
import OverView from '../components/Detail/OverView'

const Detail: React.FC = () => {
  const { id } = useParams()
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  const dispatch = useDispatch()
  const getDetails = async () => {
    const detailMovieApi = api.get(
      `/movie/${id}?api_key=${API_KEY}&language=ko-KR`,
    )
    const creditMovieApi = api.get(
      `/movie/${id}/credits?api_key=${API_KEY}&language=ko-KR`,
    )
    const trailerApi = api.get(
      `/movie/${id}/videos?api_key=${API_KEY}&language=ko-KR`,
    )
    const reviewApi = api.get(
      `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
    )
    const recommendApi = api.get(
      `/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`,
    )
    const genreApi = api.get(
      `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`,
    )

    let [
      detailMovie,
      creditMovie,
      trailerMovie,
      reviewsMovie,
      recommendMovie,
      genreList,
    ] = await Promise.all([
      detailMovieApi,
      creditMovieApi,
      trailerApi,
      reviewApi,
      recommendApi,
      genreApi,
    ])

    dispatch(getSelectedMovie(detailMovie.data))
    dispatch(getCredits(creditMovie.data))
    dispatch(getTrailerMovie(trailerMovie.data.results))
    dispatch(getReviewsMovie(reviewsMovie.data.results))
    dispatch(getRecommendMovie(recommendMovie.data.results))
    dispatch(
      getGenreList({
        genreList: genreList.data.genres,
      }),
    )
    dispatch(falseLoading())
  }

  useEffect(() => {
    dispatch(trueLoading())
    getDetails()
    window.scrollTo(0, 0)
  }, [id])

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
    <div className="w-full h-full bg-black">
      <div className="baseColor baseContainer">
        <OverView />
      </div>
    </div>
  )
}

export default Detail
