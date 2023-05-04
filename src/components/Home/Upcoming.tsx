import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import CardSwiper from './CardSwiper'

const Upcoming = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.upComingMovies,
  )

  const sortedmovies = [...movie].sort((a, b) => {
    if (a.release_date > b.release_date) return 1
    if (a.release_date < b.release_date) return -1
    return 0
  })

  return (
    <div className="mt-24 px-32">
      <h2 className="text-3xl">상영 예정 영화</h2>
      <CardSwiper movies={sortedmovies} />
    </div>
  )
}

export default Upcoming
