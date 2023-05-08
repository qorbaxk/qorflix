import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSearch } from '../../redux/slice/searchSlice'

const Search: React.FC = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const gotoSearch = (e: any) => {
    e.preventDefault()
    dispatch(getSearch(text))
  }

  return (
    <>
      <form
        className="mt-10 flex flex-row gap-4 w-[300px] h-[40px] items-center"
        onSubmit={gotoSearch}
      >
        <input
          type="search"
          aria-label="검색창"
          className="grow h-full px-1 text-black"
          placeholder="검색어를 입력하세요"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button
          className="shrink-1 h-full p-1"
          role="submit"
          aria-label="검색 버튼"
        >
          <img
            aria-hidden
            width={25}
            src="/src/assets/Search.svg"
            alt="돋보기 이미지"
          />
        </button>
      </form>
    </>
  )
}

export default Search
