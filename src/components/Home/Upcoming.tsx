import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'
import CardSwiper from './CardSwiper'

const Upcoming = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.upComingMovies,
  )

  const dateSortedMovies = [...movie].sort((a, b) => {
    if (a.release_date > b.release_date) return 1
    if (a.release_date < b.release_date) return -1
    return 0
  })

  console.log('예정', dateSortedMovies)

  return (
    <div className="px-32">
      <h2 className="text-3xl">상영 예정 영화</h2>
      <CardSwiper movies={dateSortedMovies} />
    </div>
  )
}

export default Upcoming
