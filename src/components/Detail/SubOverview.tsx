import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const SubOverview:React.FC = () => {

  const detail = useSelector(
    (detailState: RootState) => detailState.dt.selectedMovieInfo,
  )

  console.log(detail)


  return (
    <div>SubOverview</div>
  )
}

export default SubOverview