import { useTableData } from '../../../../data-access/hooks/useTableData'
import { StyledTable, StyledTbody } from '../../../styles'
import { TableHeadItem } from '../../atoms'
import { TableRow } from '../../molecules'

export const Table = () => {
  const { columnData, rowData } = useTableData()

  return (
    <StyledTable>
      <thead>
        <tr>
          {columnData.map(item => (
            <TableHeadItem key={item.heading} item={item} />
          ))}
        </tr>
      </thead>
      <StyledTbody>
        {rowData.map(item => (
          <TableRow key={`${item['id' as keyof typeof item]}`} rowObj={item} column={columnData} />
        ))}
      </StyledTbody>
    </StyledTable>
  )
}
