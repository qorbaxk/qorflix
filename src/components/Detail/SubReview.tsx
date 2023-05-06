import React from 'react'
import ReviewCard from './ReviewCard'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const SubReview: React.FC = () => {
  const reviews = useSelector(
    (detailState: RootState) => detailState.dt.reviewMovieInfo,
  )

  return <>{reviews.length ? <ReviewCard /> : <p>아직 리뷰가 없습니다.</p>}</>
}

export default SubReview
