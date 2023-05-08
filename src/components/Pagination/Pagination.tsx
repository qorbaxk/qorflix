import React from 'react'
import Pagination from 'react-js-pagination'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getPage } from '../../redux/slice/pageSlice'

const Paging = () => {
  const dispatch = useDispatch()
  const page = useSelector((pageState: RootState) => pageState.pg.page)

  const pageHandler = (page: number) => {
    dispatch(getPage(page))
  }

  console.log(page)

  return (
    <>
      <Pagination
        activePage={page}
        hideDisabled={true}
        itemsCountPerPage={20}
        totalItemsCount={10000}
        pageRangeDisplayed={5}
        onChange={(page: number) => pageHandler(page)}
      />
    </>
  )
}

export default Paging
