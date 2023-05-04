import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch } from 'react-redux'
import { getMainMovies } from '../redux/slice/movieSlice'
import Banner from '../components/Home/Banner'
import Popular from '../components/Home/Popular'


const Home = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()
  const getMovies = async () => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
    )

    let [popularMovies] = await Promise.all([popularMovieApi])

    dispatch(
      getMainMovies({
        popularMovies: popularMovies.data.results,
      }),
    )
  }
  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="baseColor min-h-screen h-full">
      <Banner />
      <Popular/>
    </div>
  )
}

export default Home
