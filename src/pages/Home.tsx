import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch } from 'react-redux'
import {
  getMainMovies,
  getComingMovies,
  getPlayingMovies,
} from '../redux/slice/movieSlice'
import Banner from '../components/Home/Banner'
import Popular from '../components/Home/Popular'
import Upcoming from '../components/Home/Upcoming'
import NowPlaying from '../components/Home/NowPlaying'

const Home = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()
  const getMovies = async () => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    const upComingMovieApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    const nowPlayingMovieApi = api.get(
      `/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    let [popularMovies, upComingMovies, nowPlayingMovies] = await Promise.all([
      popularMovieApi,
      upComingMovieApi,
      nowPlayingMovieApi,
    ])

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
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="baseColor min-h-screen h-full">
      <Banner />
      <NowPlaying />
      <Popular />
      <Upcoming />
    </div>
  )
}

export default Home
