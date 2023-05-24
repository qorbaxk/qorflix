import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import Button from './Button'

const GenreFilter: React.FC = () => {
  const [isOpen, setOpen] = useState(false)
  const toggleDropdown = () => setOpen(!isOpen)
  const genre = useSelector((movieState: RootState) => movieState.mv.genreList)

  return (
    <div className="w-full border-t-2 border-white">
      <div
        role="button"
        aria-label="드롭다운"
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <p>장르 선택</p>
        <img
          aria-hidden
          src="/Arrow.svg"
          width={20}
          alt="화살표 아이콘"
          className={`transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        ></img>
      </div>
      <div
        className={`pb-4 border-b-2 border-solid border-[#E5E8EC]
      ${isOpen ? 'block' : 'hidden'} `}
      >
        <div className="w-[300px] flex flex-row flex-wrap gap-4">
          {genre.map(item => (
            <Button key={item.id} id={item.id} name={item.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default GenreFilter
