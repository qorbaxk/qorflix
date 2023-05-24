import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFilter } from '../../redux/slice/filterSlice'
import { RootState } from '../../redux/store'

const FilterOptions: React.FC = () => {
  const data = [
    { id: 1, label: '가나다순' },
    { id: 2, label: '평균 별점 높은 순' },
    { id: 3, label: '신작 순' },
    { id: 4, label: '평가 수 많은 순' },
    { id: 5, label: '최근에 담은 순' },
  ]

  const filtering = useSelector(
    (filterState: RootState) => filterState.ft.filter,
  )
  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number>(filtering)
  const dispatch = useDispatch()
  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (id: number) => {
    selectedItem == id ? setSelectedItem(5) : setSelectedItem(id)
    dispatch(getFilter(id))
    setOpen(false)
  }

  return (
    <div className="w-full pl-12 pt-8">
      <div className="w-72 rounded-xl shadow-[0 10px 25px rgba(0,0,0,.1)] relative">
        <div
          role="button"
          aria-label="드롭다운 버튼 및 현재 선택되어 있는 항목"
          className="p-4 cursor-pointer flex justify-between items-center"
          onClick={toggleDropdown}
        >
          {selectedItem
            ? `${data.find(item => item.id == selectedItem)?.label}`
            : '선택한 항목이 없습니다.'}
          <img
            aria-hidden
            src="/Arrow.svg"
            width={20}
            className={`transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}
          />
        </div>
        <div
          className={`p-1 border-t-2 border-solid border-[#E5E8EC] absolute top-14 left-0 bg-black w-full rounded-b-xl ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          {data.map(item => (
            <div
              className="p-2.5 cursor-pointer"
              onClick={() => handleItemClick(item.id)}
              id={item.id.toString()}
              key={item.label}
              role="button"
              aria-label="하위 항목"
            >
              <span
                className={`text-[#e50914] transition-all ${
                  item.id == selectedItem ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden
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

export default FilterOptions
