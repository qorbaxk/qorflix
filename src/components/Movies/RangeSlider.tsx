import React, { useState } from 'react'
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react'
import { useDispatch, useSelector } from 'react-redux'
import { getYear } from '../../redux/slice/filterSlice'
import { RootState } from '../../redux/store'

const RangeSlider: React.FC = () => {
  const now = new Date().getFullYear()
  const years = useSelector(
    (filterState: RootState) => filterState.ft.yearGroup,
  )
  const [minValue, setMinValue] = useState(years.minYear)
  const [maxValue, setMaxValue] = useState(years.maxYear)
  const dispatch = useDispatch()

  const [isOpen, setOpen] = useState(false)
  const toggleDropdown = () => setOpen(!isOpen)

  const yearSubmit = () => {
    dispatch(
      getYear({
        minYear: minValue,
        maxYear: maxValue,
      }),
    )
  }

  return (
    <div className="w-full border-t-2 border-white">
      <div
        role="button"
        aria-label="드롭다운 버튼"
        className="p-4 cursor-pointer flex justify-between items-center"
        onClick={toggleDropdown}
      >
        <p>개봉년도 범위</p>
        <img
          aria-hidden
          alt="화살표 아이콘"
          src="/Arrow.svg"
          width={20}
          className={`transition-all ${isOpen ? 'rotate-90' : 'rotate-0'}`}
        ></img>
      </div>
      <div
        className={`multi-range-slider-container border-b-2 border-solid border-[#E5E8EC]
      ${isOpen ? 'block' : 'hidden'} `}
      >
        <div
          role="text"
          aria-label="현재 선택한 년도 범위"
          className="flex flex-row justify-center items-center"
        >
          <span role="text" aria-label="최소" className="text-lg font-bold">
            {minValue}
          </span>
          <span className="text-sm">년</span>
          <span aria-hidden className="mx-6 block w-4 h-[1px] bg-white"></span>
          <span role="text" aria-label="최대" className="text-lg font-bold">
            {maxValue}
          </span>
          <span className="text-sm">년</span>
        </div>
        <MultiRangeSlider
          min={1990}
          max={now}
          step={1}
          ruler={false}
          label={true}
          preventWheel={false}
          minValue={minValue}
          maxValue={maxValue}
          barInnerColor="red"
          style={{
            border: 'none',
          }}
          onInput={(e: ChangeResult) => {
            setMinValue(e.minValue)
            setMaxValue(e.maxValue)
          }}
        ></MultiRangeSlider>
        <div className="flex flex-row justify-center">
          <button
            type="submit"
            className="my-4 px-16 py-1 text-center bg-neutral-800 text-sm hover:bg-primary-100"
            onClick={yearSubmit}
          >
            적용하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default RangeSlider
