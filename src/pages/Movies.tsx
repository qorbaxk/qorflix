import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { trueLoading, falseLoading } from '../redux/slice/loadingSlice'
import ClipLoader from 'react-spinners/ClipLoader'
import { getGenreList, getAllTimeMovies } from '../redux/slice/movieSlice'
import Paging from '../components/Pagination/Paging'
import Search from '../components/Movies/Search'
import MovieView from '../components/Movies/MovieView'

const Movies: React.FC = () => {
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )
  const page = useSelector((pageState: RootState) => pageState.pg.page)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()

  const getAllMovies = async () => {
    dispatch(trueLoading())

    const allTimeMovieApi = api.get(
      `/discover/movie?api_key=${API_KEY}&language=ko-KR&sort_by=revenue.desc&include_adult=true&include_video=false&page=${page}`,
    )
    const genreApi = api.get(
      `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`,
    )

    let [allTimeMovies, genreList] = await Promise.all([
      allTimeMovieApi,
      genreApi,
    ])
    dispatch(
      getGenreList({
        genreList: genreList.data.genres,
      }),
    )

    dispatch(
      getAllTimeMovies({
        allTimeMovies: allTimeMovies.data.results,
      }),
    )

    dispatch(falseLoading())
  }

  useEffect(() => {
    getAllMovies()
    window.scrollTo(0, 0)
  }, [page])

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
    <div className="baseColor baseContainer">
      <div className="flex flex-row justify-around">
        <Search />
        <MovieView/>
      </div>
      <Paging />
    </div>
  )
}

export default Movies
