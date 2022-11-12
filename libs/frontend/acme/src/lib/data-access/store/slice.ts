import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IAppState, TResponse } from '../types'
import { extraReducers } from './extra-reducers'
import { reducers } from './reducers'

const phpAxiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })

export const fetchAlbumData = createAsyncThunk('fetchAlbumData', async () => {
  const { data } = await phpAxiosInstance.get('photos')
  return data
})
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
  selectedRows: {},
  selectionMode: '',
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers,
  extraReducers,
})

export const { toggleSingle, toggleAll, updateSelectionMode } = tableSlice.actions
export default tableSlice.reducer
