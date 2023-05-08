import React from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import TrailerCard from './TrailerCard'

const SubTrailer: React.FC = () => {
  let trailer = useSelector(
    (detailState: RootState) => detailState.dt.trailerMovieInfo,
  )

  trailer = trailer.filter(v => v.type === 'Trailer')

  return (
    <>
      {trailer.length ? (
        <TrailerCard trailer={trailer} />
      ) : (
        <p role="alert">트레일러가 없습니다.</p>
      )}
    </>
  )
}

export default SubTrailer
