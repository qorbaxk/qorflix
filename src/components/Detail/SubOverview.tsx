import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { crewProps } from '../../redux/slice/creditSlice'
import CastCard from './CastCard'
import DirectorCard from './DirectorCard'

const SubOverview: React.FC = () => {
  const detail = useSelector(
    (detailState: RootState) => detailState.dt.selectedMovieInfo,
  )
  const credit = useSelector(
    (creditState: RootState) => creditState.cd.creditInfo,
  )

  const director = credit.crew.find(v => v.job === 'Director')

  return (
    <>
      <p role="text" aria-label="영화 줄거리" className="text-justify">
        {detail.overview}
      </p>
      <div className="mb-6">
        <p role="text" className="text-neutral-400 mb-3">
          출연진
        </p>
        <CastCard />
        <p role="text" className="text-neutral-400 mt-8 mb-3">
          감독
        </p>
        <DirectorCard director={director as crewProps} />
      </div>
    </>
  )
}

export default SubOverview
