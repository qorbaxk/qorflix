import React, { useState } from 'react'
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react'

const RangeSlider: React.FC = () => {
  const now = new Date().getFullYear()
  const [minValue, setMinValue] = useState(1990)
  const [maxValue, setMaxValue] = useState(now)

  return (
    <div className="w-full border-t-2 border-white">
      <div className="multi-range-slider-container">
        <p className="p-4">개봉년도 범위</p>
        <div className="flex flex-row justify-center items-center">
          <span className="text-lg font-bold">{minValue}</span>
          <span className="text-sm">년</span>
          <span className="mx-6 block w-4 h-[1px] bg-white"></span>
          <span className="text-lg font-bold">{maxValue}</span>
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
      </div>
    </div>
  )
}

export default RangeSlider
