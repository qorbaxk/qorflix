import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import CastCard from './CastCard'

const SubOverview: React.FC = () => {
  const detail = useSelector(
    (detailState: RootState) => detailState.dt.selectedMovieInfo,
  )
  const credit = useSelector(
    (creditState: RootState) => creditState.cd.creditInfo,
  )

  console.log(credit)

  return (
    <>
      <p className="text-justify">{detail.overview}</p>
      <div>
        <p className="text-neutral-400 mb-3">출연진</p>
        <CastCard />
      </div>
    </>
  )
}

export default SubOverview
