import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import CardSwiper from './CardSwiper'
import { oneMovieProps } from './../../redux/slice/movieSlice'

const Upcoming: React.FC = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.upComingMovies,
  )

  const dateSortedMovies = [...movie].sort((a, b) => {
    if (a.release_date > b.release_date) return 1
    if (a.release_date < b.release_date) return -1
    return 0
  })

  dateSortedMovies.unshift(dateSortedMovies.pop() as oneMovieProps)
  dateSortedMovies.unshift(dateSortedMovies.pop() as oneMovieProps)

  return (
    <div className="px-32">
      <h2 className="text-3xl">상영 예정 영화</h2>
      <CardSwiper movies={dateSortedMovies} />
    </div>
  )
}

export default Upcoming
