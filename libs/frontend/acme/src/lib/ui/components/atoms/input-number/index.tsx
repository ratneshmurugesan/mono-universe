import { ChangeEvent, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../data-access/store'
import { selectColWidthMap } from '../../../../data-access/store/selector'
import { updateColumnWidth } from '../../../../data-access/store/slice'
import { StyledDiv } from '../../../styles'

export const InputNumber = ({ dataKey }: { dataKey: string }) => {
  const dispatch = useAppDispatch()
  const selectedColWidthMap = useAppSelector(selectColWidthMap)
  const [width, setWidth] = useState(() => selectedColWidthMap[dataKey])
  const widthValRef = useRef<number>(0)

  const isButtonDisabled = width < 100

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const parsedVal = parseInt(e.target.value, 10)
    console.log('handleOnChange', parsedVal)
    if (widthValRef?.current) widthValRef.current = parsedVal
    setWidth(parsedVal)
  }

  const handleOnSetWidth = () => {
    dispatch(
      updateColumnWidth({
        dataKey,
        value: width,
      }),
    )
  }

  return (
    <StyledDiv>
      <input
        min={100}
        type="number"
        onChange={handleOnChange}
        value={width}
        style={{ width: '50px' }}
      />
      <button onClick={handleOnSetWidth} disabled={isButtonDisabled}>
        Ok
      </button>
    </StyledDiv>
  )
}
