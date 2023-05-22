import React from 'react'
import Search from './Search'
import SortOptions from './SortOptions'

const SideView = () => {
  return (
    <div className="flex flex-col">
      <Search />
      <SortOptions />
    </div>
  )
}

export default SideView
