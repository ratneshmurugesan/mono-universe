import { TableHeaderProps } from 'react-virtualized'
import { StyledHeaderCell } from '../../../styles'
import { Tooltip } from '../tooltip'

type THeaderRenderer = TableHeaderProps & {
  columnIndex: number
  targetColumns: string[]
  selectedColWidthMap: {
    [key: string]: number
  }
}

export const HeaderRenderer = ({
  label,
  dataKey,
  targetColumns,
  selectedColWidthMap,
}: THeaderRenderer) => {
  return targetColumns.includes(dataKey) ? (
    <StyledHeaderCell width={selectedColWidthMap[dataKey]}>
      <Tooltip dataKey={dataKey} />
      <span data-id={label}>{label}</span>
    </StyledHeaderCell>
  ) : (
    <StyledHeaderCell width={selectedColWidthMap[dataKey]}>
      <span data-id={label}>{label}</span>
    </StyledHeaderCell>
  )
}
