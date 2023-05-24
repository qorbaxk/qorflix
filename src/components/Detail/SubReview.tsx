import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import ReviewCard from './ReviewCard'

const SubReview: React.FC = () => {
  const reviews = useSelector(
    (detailState: RootState) => detailState.dt.reviewMovieInfo,
  )

  return (
    <>
      {reviews.length ? (
        <ReviewCard />
      ) : (
        <p role="alert">아직 리뷰가 없습니다.</p>
      )}
    </>
  )
}

export default SubReview
