import React from 'react'
import CardSwiper from './CardSwiper'
import { useSelector } from 'react-redux'
import { RootState } from './../../redux/store'

const NowPlaying = () => {
  const movie = useSelector(
    (movieState: RootState) => movieState.mv.nowPlayingMovies,
  )

  const rateSortedMovies = [...movie].sort(
    (a, b) => b.vote_average - a.vote_average,
  )

  console.log('나우', rateSortedMovies)

  return (
    <div className="px-32">
      <h2 className="text-3xl">상영중인 영화</h2>
      <CardSwiper movies={rateSortedMovies} />
    </div>
  )
}

export default NowPlaying
