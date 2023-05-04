import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch } from 'react-redux'
import { getMainMovies, getComingMovies } from '../redux/slice/movieSlice'
import Banner from '../components/Home/Banner'
import Popular from '../components/Home/Popular'
import Upcoming from '../components/Home/Upcoming'

const Home = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()
  const getMovies = async () => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
    )
    const upComingMovieApi = api.get(
      `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1&region=KR`,
    )
    let [popularMovies, upComingMovies] = await Promise.all([
      popularMovieApi,
      upComingMovieApi,
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
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="baseColor min-h-screen h-full">
      <Banner />
      <Popular />
      <Upcoming />
    </div>
  )
}

export default Home
