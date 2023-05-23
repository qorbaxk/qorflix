import React, { useEffect } from 'react'
import api from '../redux/api'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { trueLoading, falseLoading } from '../redux/slice/loadingSlice'
import ClipLoader from 'react-spinners/ClipLoader'
import {
  getGenreList,
  getAllTimeMovies,
  getSearchMovies,
} from '../redux/slice/movieSlice'
import Paging from '../components/Pagination/Paging'
import MovieView from '../components/Movies/MovieView'
import SideView from '../components/Movies/SideView'

const Movies: React.FC = () => {
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )
  const sorting = useSelector((filterState: RootState) => filterState.ft.sort)

  const years = useSelector(
    (filterState: RootState) => filterState.ft.yearGroup,
  )
  const page = useSelector((pageState: RootState) => pageState.pg.page)
  const keyword = useSelector((searchState: RootState) => searchState.sh.search)

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY
  const dispatch = useDispatch()

  const getAllMovies = async () => {
    dispatch(trueLoading())

    const allTimeMovieApi = api.get(
      `/discover/movie?api_key=${API_KEY}&language=ko-KR&sort_by=${sorting}&primary_release_date.gte=${years.minYear}-01-01&primary_release_date.lte=${years.maxYear}-12-31&include_adult=true&include_video=false&page=${page}`,
    )
    const genreApi = api.get(
      `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`,
    )
    const searchApi = api.get(
      `/search/movie?api_key=${API_KEY}&language=ko-KR&query=${keyword}&include_adult=true`,
    )

    let [allTimeMovies, genreList, searchMovies] = await Promise.all([
      allTimeMovieApi,
      genreApi,
      searchApi,
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

    dispatch(
      getSearchMovies({
        searchMovies: searchMovies.data.results,
      }),
    )

    dispatch(falseLoading())
  }

  useEffect(() => {
    getAllMovies()
    window.scrollTo(0, 0)
  }, [page, keyword, sorting, years.maxYear, years.minYear])

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
      <div className="flex flex-row justify-around pb-6">
        <SideView />
        <MovieView />
      </div>
      {keyword ? null : <Paging />}
    </div>
  )
}

export default Movies
