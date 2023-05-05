import React, { useEffect, useState } from 'react'
import TrailerCard from './TrailerCard'
import ClipLoader from 'react-spinners/ClipLoader'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'

const SubTrailer = () => {
  const loading = useSelector(
    (loadingState: RootState) => loadingState.ld.loading,
  )

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
      <TrailerCard />
    </>
  )
}

export default SubTrailer
