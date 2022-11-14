import { useEffect, useCallback } from 'react'

import {
  selectAlbums,
  selectColWidthMap,
  selectSelectedRows,
  selectColAlignMap,
} from '../store/selector'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../store'
import { fetchRequiredAlbumData } from '../api'
import { updateBodyRowCheckbox } from '../store/slice'

export const useTableData = () => {
  const dispatch = useAppDispatch()
  const selectedAlbums = useAppSelector(selectAlbums)
  const { isLoading, data } = selectedAlbums
  const selectedRows = useSelector(selectSelectedRows)
  const selectedColWidthMap = useAppSelector(selectColWidthMap)
  const selectedColAlignMap = useAppSelector(selectColAlignMap)

  const loadMoreRows = useCallback(
    ({ startIndex, stopIndex }: { startIndex: number; stopIndex: number }) => {
      return dispatch(fetchRequiredAlbumData({ startIndex, stopIndex }))
    },
    [dispatch],
  )
  const handleOnRowClick = ({ rowData }: { rowData: { [key: string]: string } }) => {
    dispatch(
      updateBodyRowCheckbox({
        selectedRowId: rowData['id'],
        selectedRowCheckedValue: !selectedRows[rowData['id']],
      }),
    )
  }

  useEffect(() => {
    dispatch(fetchRequiredAlbumData({ startIndex: 0, stopIndex: 1 }))
  }, [dispatch])

  const rowData = data.map(obj => {
    return { ...obj, selected: selectedRows[obj['id']] }
  })

  function isRowLoaded({ index }: { index: number }) {
    return !!rowData[index]
  }
  const targetColumns: string[] = ['id', 'albumId', 'thumbnail', 'title', 'url']
  let totalWidth = 100
  targetColumns.forEach((key: string) => {
    totalWidth += selectedColWidthMap[key]
  })

  return {
    rowData,
    isLoading,
    selectedColWidthMap,
    selectedColAlignMap,
    targetColumns,
    totalWidth,
    isRowLoaded,
    loadMoreRows,
    handleOnRowClick,
  }
}
