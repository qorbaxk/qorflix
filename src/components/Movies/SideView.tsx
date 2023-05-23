import React from 'react'
import Search from './Search'
import SortOptions from './SortOptions'
import RangeSlider from './RangeSlider';

const SideView:React.FC = () => {
  return (
    <div className="flex flex-col">
      <Search />
      <SortOptions />
      <RangeSlider/>
    </div>
  )
}

export default SideView
