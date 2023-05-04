import React from 'react'
import CardSwiper from './CardSwiper'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'

const Popular = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.popularMovies,
  )

  console.log(movie)

  return (
    <div className="mt-24 px-32">
      <h2 className="text-3xl">현재 인기 영화</h2>
      <CardSwiper movies={movie} />
    </div>
  )
}

export default Popular
