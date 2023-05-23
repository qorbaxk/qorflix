import React from 'react'
import Search from './Search'
import SortOptions from './SortOptions'
import RangeSlider from './RangeSlider'
import GenreFilter from './GenreFilter'

const SideView: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Search />
      <SortOptions />
      <RangeSlider />
      <GenreFilter />
    </div>
  )
}

export default SideView
