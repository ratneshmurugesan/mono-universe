import { useAppDispatch, useAppSelector } from '../../../../data-access/store'
import { selectColWidthMap } from '../../../../data-access/store/selector'
import { updateColumnAlign } from '../../../../data-access/store/slice'
import { StyledButton, StyledButtonGroup, StyledInputNumber, StyledTooltip } from '../../../styles'

export const Tooltip = ({ dataKey }: { dataKey: string }) => {
  const dispatch = useAppDispatch()
  const selectedColWidthMap = useAppSelector(selectColWidthMap)

  const handleOnAlignChange = (dataKey: string, value: string) => {
    dispatch(
      updateColumnAlign({
        dataKey,
        value,
      }),
    )
  }

  console.log({ updateColumnAlign, selectedColWidthMap })
  return (
    <StyledTooltip width={selectedColWidthMap[dataKey]}>
      <StyledButtonGroup>
        <StyledButton onClick={() => handleOnAlignChange(dataKey, 'left')}>L</StyledButton>
        <StyledButton onClick={() => handleOnAlignChange(dataKey, 'center')}> C</StyledButton>
        <StyledButton onClick={() => handleOnAlignChange(dataKey, 'right')}> R</StyledButton>
      </StyledButtonGroup>
      <StyledInputNumber dataKey={dataKey} />
    </StyledTooltip>
  )
}
