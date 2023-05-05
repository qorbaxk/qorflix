import React from 'react'
import TrailerCard from './TrailerCard'
import ClipLoader from 'react-spinners/ClipLoader'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const SubTrailer: React.FC = () => {
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )
  let trailer = useSelector(
    (detailState: RootState) => detailState.dt.trailerMovieInfo,
  )

  trailer = trailer.filter(v => v.type === 'Trailer')

  if (loading) {
    return (
      <div
        className="flex justify-center items-center bg-black min-h-screen"
        role="alert"
        aria-busy="true"
        aria-live="polite"
        aria-label="로딩중"
      >
        <ClipLoader color="red" loading={loading} size={150} />
      </div>
    )
  }
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
