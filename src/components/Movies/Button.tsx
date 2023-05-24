import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAddGenre, getDelGenre } from '../../redux/slice/filterSlice'
import { RootState } from '../../redux/store'

type BtnProps = {
  id: number
  name: string
}

const Button: React.FC<BtnProps> = props => {
  const dispatch = useDispatch()
  const choices = useSelector((filterState: RootState) => filterState.ft.choice)
  const [color, setColors] = useState('from-gray-700 via-gray-900 to-black')

  const handleClickButton = (id: number) => {
    let existIdx = choices.findIndex(v => v === id)
    if (choices.length === 0) {
      dispatch(getAddGenre(id))
      setColors('from-fuchsia-500 via-red-600 to-orange-400')
    } else {
      if (existIdx >= 0) {
        dispatch(getDelGenre(existIdx))
        setColors('from-gray-700 via-gray-900 to-black')
      } else {
        dispatch(getAddGenre(id))
        setColors('from-fuchsia-500 via-red-600 to-orange-400')
      }
    }
  }

  useEffect(() => {
    choices.includes(props.id)
      ? setColors('from-fuchsia-500 via-red-600 to-orange-400')
      : setColors('from-gray-700 via-gray-900 to-black')
  }, [choices])

  return (
    <button
      role="submit"
      aria-label="장르선택"
      key={props.id}
      className={`w-fit p-4 rounded-lg font-bold border-2 border-solid border-black hover:border-white bg-gradient-to-r ${color}`}
      onClick={() => handleClickButton(props.id)}
    >
      {props.name}
    </button>
  )
}
export default Button
