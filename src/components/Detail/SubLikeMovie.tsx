import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import CardInner from '../Home/CardInner'

const SubLikeMovie: React.FC = () => {
  let recommend = useSelector(
    (detailState: RootState) => detailState.dt.recommendMovieInfo,
  )

  recommend = recommend
    .filter(value => value.backdrop_path !== null && value.vote_average > 5)
    .sort((a, b) => b.vote_average - a.vote_average)
    .splice(0, 10)

  return (
    <div className="grid grid-cols-2 auto-rows-min gap-4 mb-6">
      {recommend.map(item => (
        <CardInner key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SubLikeMovie
