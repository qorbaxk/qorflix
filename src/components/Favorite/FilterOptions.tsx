import React, { useState } from 'react'

const FilterOptions: React.FC = () => {
  const data = [
    { id: 1, label: '가나다순' },
    { id: 2, label: '평균 별점 높은 순' },
    { id: 3, label: '신작 순' },
    { id: 4, label: '평가 수 많은 순' },
    { id: 5, label: '최근에 담은 순' },
  ]

  const [isOpen, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<number>(1)

  const toggleDropdown = () => setOpen(!isOpen)

  const handleItemClick = (id: number) => {
    selectedItem == id ? setSelectedItem(1) : setSelectedItem(id)
    setOpen(false)
  }

  return (
    <div className="w-full pl-12 pt-8">
      <div className="w-72 rounded-xl shadow-[0 10px 25px rgba(0,0,0,.1)] relative">
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

export default FilterOptions
