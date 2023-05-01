import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch, useSelector } from 'react-redux'
import { getMainMovies } from '../redux/slice/movieSlice'
import { RootState } from '../redux/store'

const Home = () => {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.popularMovies,
  )

  const getMovies = async () => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`,
    )

    let [popularMovies] = await Promise.all([popularMovieApi])

    dispatch(
      getMainMovies({
        popularMovies: popularMovies.data,
      }),
    )
  }
  useEffect(() => {
    getMovies()
  }, [])

  console.log(movie)

  return <div className="baseColor min-h-screen h-full p-4">Home</div>
}

export default Home
