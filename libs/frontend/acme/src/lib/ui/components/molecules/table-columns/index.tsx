import { Column } from 'react-virtualized'
import { StyledCellDiv } from '../../../styles'
import { CustomCheckbox, CustomHeaderCheckbox, CustomImage } from '../../atoms'
import { useTableData as useCustomTableData } from '../../../../data-access/hooks/useTableData'
import { HeaderRenderer } from '../header-renderer'

function getColumns({
  selectedColAlignMap,
  selectedColWidthMap,
}: {
  selectedColAlignMap: { [key: string]: string }
  selectedColWidthMap: { [key: string]: number }
}) {
  return [
    {
      width: 30,
      label: <CustomHeaderCheckbox />,
      dataKey: 'checkbox',
      cellRenderer: ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) => (
        <StyledCellDiv align="center">
          <CustomCheckbox rowObj={rowData} />
        </StyledCellDiv>
      ),
    },
    {
      width: selectedColWidthMap['id'],
      label: 'id',
      dataKey: 'id',
      cellRenderer: ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) => {
        return (
          <StyledCellDiv align={selectedColAlignMap[dataKey]}>{rowData[dataKey]}</StyledCellDiv>
        )
      },
    },
    {
      width: selectedColWidthMap['thumbnail'],
      label: 'thumbnail',
      dataKey: 'thumbnail',
      cellRenderer: ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) => (
        <StyledCellDiv align={selectedColAlignMap[dataKey]}>
          <CustomImage rowObj={rowData} />
        </StyledCellDiv>
      ),
    },
    {
      width: selectedColWidthMap['title'],
      label: 'title',
      dataKey: 'title',
      cellRenderer: ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) => <StyledCellDiv align={selectedColAlignMap[dataKey]}>{rowData[dataKey]}</StyledCellDiv>,
    },
  ]
}

export const TableColumns = () => {
  const { selectedColWidthMap, selectedColAlignMap } = useCustomTableData()
  const columnData = getColumns({ selectedColAlignMap, selectedColWidthMap })

  return (
    <div>
      {columnData.map(({ dataKey, ...other }, index) => {
        return (
          <Column
            key={dataKey}
            headerRenderer={headerProps => <HeaderRenderer {...headerProps} columnIndex={index} />}
            dataKey={dataKey}
            {...other}
          />
        )
      })}
    </div>
  )
}
