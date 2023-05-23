import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { getSorting } from '../../redux/slice/filterSlice'

const SortOptions = () => {
  const data = [
    { id: 'revenue.desc', label: '수익 높은 순' },
    { id: 'popularity.desc', label: '최근 인기 높은 순' },
    { id: 'vote_count.desc', label: '평가 수 많은 순' },
  ]

  const sorting = useSelector((filterState: RootState) => filterState.ft.sort)
  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<string>(sorting)
  const dispatch = useDispatch()
  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (id: string) => {
    selectedItem == id ? setSelectedItem('revenue.desc') : setSelectedItem(id)
    dispatch(getSorting(id))
    setOpen(false)
  }

  return (
    <div className="w-full mt-8 border-t-2 border-white">
      <div className="rounded-xl shadow-[0 10px 25px rgba(0,0,0,.1)] relative">
        <div
          className="p-4 cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        >
          {selectedItem
            ? `${data.find(item => item.id == selectedItem)?.label}`
            : '선택한 항목이 없습니다.'}
          <img
            src="/src/assets/Arrow.svg"
            width={20}
            className={`transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          ></img>
        </div>
        <div
          className={`p-1 border-t-2 border-solid border-[#E5E8EC] w-full rounded-b-xl bg-neutral-800 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {data.map(item => (
            <div
              className="p-2.5 cursor-pointer"
              onClick={() => handleItemClick(item.id)}
              id={item.id}
              key={item.label}
            >
              <span
                className={`text-[#e50914] transition-all ${
                  item.id == selectedItem ? 'opacity-100' : 'opacity-0'
                }`}
              >
                •{' '}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SortOptions
