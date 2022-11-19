import { useTableData as useCustomTableData } from '../../../../data-access/hooks/useTableData'
import { StyledCellDiv, StyledTable } from '../../../styles'

import { Column, InfiniteLoader, AutoSizer } from 'react-virtualized'
import '../../../styles.css'

import { CustomCheckbox, CustomHeaderCheckbox, CustomImage } from '../../atoms'
import { MonoText } from '@mono-universe/frontend/shared/design-system'
import { HeaderRenderer } from '../../molecules'

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
      cellRenderer: ({ rowData }: { rowData: { [key: string]: string }; dataKey: string }) => (
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
      width: selectedColWidthMap['albumId'],
      label: 'albumId',
      dataKey: 'albumId',
      cellRenderer: function ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) {
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
      cellRenderer: function ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) {
        return (
          <StyledCellDiv align={selectedColAlignMap[dataKey]}>{rowData[dataKey]}</StyledCellDiv>
        )
      },
    },
    {
      width: selectedColWidthMap['url'],
      label: 'url',
      dataKey: 'url',
      cellRenderer: function ({
        rowData,
        dataKey,
      }: {
        rowData: { [key: string]: string }
        dataKey: string
      }) {
        return (
          <StyledCellDiv align={selectedColAlignMap[dataKey]}>{rowData[dataKey]}</StyledCellDiv>
        )
      },
    },
  ]
}

export const CustomTable = () => {
  const {
    isLoading,
    rowData,
    selectedColWidthMap,
    selectedColAlignMap,
    loadMoreRows,
    isRowLoaded,
    handleOnRowClick,
    targetColumns,
  } = useCustomTableData()
  const headerRendererProps = {
    targetColumns,
    selectedColWidthMap,
  }
  const columnData = getColumns({ selectedColAlignMap, selectedColWidthMap })

  if (isLoading) return <MonoText variant="heading2">Loading...</MonoText>
  if (!columnData.length || !rowData.length)
    return <MonoText variant="paragraph1">No Data!</MonoText>
  return (
    <InfiniteLoader
      isRowLoaded={isRowLoaded}
      loadMoreRows={loadMoreRows}
      rowCount={50000}
      minimumBatchSize={300}
    >
      {({ onRowsRendered, registerChild }) => (
        <AutoSizer>
          {({ width }) => {
            return (
              <StyledTable
                ref={registerChild}
                onRowsRendered={onRowsRendered}
                width={width}
                height={window.innerHeight - 170}
                headerHeight={60}
                rowHeight={80}
                rowCount={rowData.length}
                onRowClick={handleOnRowClick}
                rowGetter={({ index }: { index: number }) => rowData[index]}
              >
                {columnData.map(({ dataKey, ...other }, index) => {
                  return (
                    <Column
                      key={dataKey}
                      headerRenderer={headerProps => (
                        <HeaderRenderer
                          {...headerProps}
                          {...headerRendererProps}
                          columnIndex={index}
                        />
                      )}
                      dataKey={dataKey}
                      {...other}
                    />
                  )
                })}
              </StyledTable>
            )
          }}
        </AutoSizer>
      )}
    </InfiniteLoader>
  )
}
