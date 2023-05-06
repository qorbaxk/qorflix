import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import CardInner from '../Home/CardInner'

const SubLikeMovie = () => {
  let recommend = useSelector(
    (detailState: RootState) => detailState.dt.recommendMovieInfo,
  )

  console.log(recommend)

  return (
    <div className="grid grid-cols-2 auto-rows-min gap-4">
      {recommend.map(item => (
        <CardInner key={item.id} item={item} />
      ))}
    </div>
  )
}

export default SubLikeMovie
