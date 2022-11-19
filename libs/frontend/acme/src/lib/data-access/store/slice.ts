import { createSlice } from '@reduxjs/toolkit'
import { IAppState, TResponse } from '../types'
import { extraReducers } from './extra-reducers'
import { reducers } from './reducers'

const commonAPIFields: TResponse = {
  isLoading: false,
  status: 'idle',
  isError: false,
  data: [],
  message: '',
}

const initialState: IAppState = {
  albums: {
    ...commonAPIFields,
  },
  selectedRows: { header: false },
  colWidthMap: { id: 300, albumId: 300, thumbnail: 300, title: 300, url: 300 },
  colAlignMap: {
    id: 'center',
    albumId: 'center',
    thumbnail: 'center',
    title: 'center',
    url: 'center',
  },
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers,
  extraReducers,
})

export const { updateBodyRowCheckbox, updateHeaderCheckBox, updateColumnWidth, updateColumnAlign } =
  tableSlice.actions
export default tableSlice.reducer
