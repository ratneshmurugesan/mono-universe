import { TableHeaderProps } from 'react-virtualized'
import { useTableData as useCustomTableData } from '../../../../data-access/hooks/useTableData'
import { StyledHeaderCell } from '../../../styles'
import { Tooltip } from '../../atoms/tooltip'

export const HeaderRenderer = ({ label, dataKey }: TableHeaderProps & { columnIndex: number }) => {
  const { selectedColWidthMap, targetColumns } = useCustomTableData()
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
