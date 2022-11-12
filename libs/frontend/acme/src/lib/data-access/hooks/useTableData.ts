import { useEffect } from 'react'

import { TTableCol } from '../../ui/types'
import { selectAlbums, selectSelectedRows } from '../store/selector'
import { useSelector } from 'react-redux'
import { fetchAlbumData } from '../store/slice'
import { useAppDispatch, useAppSelector } from '../store'

export const useTableData = () => {
  const dispatch = useAppDispatch()
  const selectedAlbums = useAppSelector(selectAlbums)
  const { isLoading, data, isError, message } = selectedAlbums
  const selectedRows = useSelector(selectSelectedRows)

  console.log({ isLoading, data, isError, message })
  // const selectedSelectionMode = useSelector(selectSelectionMode)
  // useEffect(() => {
  //   axios('https://jsonplaceholder.typicode.com/photos')
  //     .then(res => {
  //       const enhancedData = res.data.map((obj: TTableRow) => {
  //         return { ...obj, selected: false }
  //       })
  //       setDataTable(enhancedData)
  //     })
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    // dispatch(getAllDeliveryManagerDetailsWithProjectAndTaskUsingCustomerUid());
    dispatch(fetchAlbumData())
  }, [dispatch])

  // const enhancedData = dataTable.map((obj: TTableRow) => {
  //   if (selectedSelectionMode === 'all') return { ...obj, selected: true }
  //   // if (selectedSelectionMode === 'indeterminate')
  //   //   return { ...obj, selected: !!selectedRows[obj['id'] as keyof typeof selectedRows] }
  //   // return { ...obj, selected: selectedRows[obj['id'] as keyof typeof selectedRows] }
  // })

  // const rowData = enhancedData.slice(0, 20)

  const columnData: TTableCol = [
    { heading: 'checkbox', value: 'checkbox', numeric: false, width: '5%' },
    { heading: 'thumbnail', value: 'thumbnail', numeric: false, width: '5%' },
    { heading: 'Id', value: 'id', numeric: true, width: 'auto' },
    { heading: 'Title', value: 'title', numeric: false, width: 'auto' },
  ]
  console.log({ selectedRows })

  return {
    rowData: data,
    columnData,
  }
}
