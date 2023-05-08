import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import {
  getGenreList,
  getMainMovies,
  getComingMovies,
  getPlayingMovies,
} from '../redux/slice/movieSlice'
import { trueLoading, falseLoading } from '../redux/slice/loadingSlice'
import Banner from '../components/Home/Banner'
import Popular from '../components/Home/Popular'
import Upcoming from '../components/Home/Upcoming'
import NowPlaying from '../components/Home/NowPlaying'
import ClipLoader from 'react-spinners/ClipLoader'

const Home: React.FC = () => {
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()
  const getMovies = async () => {
    dispatch(trueLoading())

    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    const upComingMovieApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    const nowPlayingMovieApi = api.get(
      `/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    const genreApi = api.get(
      `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`,
    )

    let [popularMovies, upComingMovies, nowPlayingMovies, genreList] =
      await Promise.all([
        popularMovieApi,
        upComingMovieApi,
        nowPlayingMovieApi,
        genreApi,
      ])

    dispatch(
      getGenreList({
        genreList: genreList.data.genres,
      }),
    )

    dispatch(
      getMainMovies({
        popularMovies: popularMovies.data.results,
      }),
    )
    dispatch(
      getComingMovies({
        upComingMovies: upComingMovies.data.results,
      }),
    )
    dispatch(
      getPlayingMovies({
        nowPlayingMovies: nowPlayingMovies.data.results,
      }),
    )

    dispatch(falseLoading())
  }
  useEffect(() => {
    getMovies()
    window.scrollTo(0, 0)
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
    <div className="w-full bg-black">
      <div className="baseColor baseContainer">
        <Banner />
        <NowPlaying />
        <Popular />
        <Upcoming />
      </div>
    </div>
  )
}

export default Home
