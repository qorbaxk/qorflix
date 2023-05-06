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
    <>
      {recommend.length ? (
        <div className="grid grid-cols-2 auto-rows-min gap-4 mb-12">
          {recommend.map(item => (
            <div key={item.id} className="hover:scale-125 transition-all">
              <CardInner item={item} />
            </div>
          ))}
        </div>
      ) : (
        <p>이 영화와 비슷한 추천 영화가 없습니다.</p>
      )}
    </>
  )
}

export default SubLikeMovie
