import { createAsyncThunk } from '@reduxjs/toolkit'
// import { sampleData as data } from '../sample'

import axios from 'axios'
const phpAxiosInstance = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com/' })

export const fetchAlbumData = createAsyncThunk('fetchAlbumData', async () => {
  const { data } = await phpAxiosInstance.get(`photos`)
  return data
})
// export const fetchRequiredAlbumData = createAsyncThunk('fetchRequiredAlbumData', async (params) => {
//   const {startIndex, stopIndex} = params
//   const { data } = await phpAxiosInstance.get(`photos?_start=${startIndex}&_limit=${stopIndex}`)
//   return data
// })
export const fetchRequiredAlbumData = createAsyncThunk(
  'fetchAlbumData',
  async ({ startIndex = 0, stopIndex = 0 }: { startIndex: number; stopIndex: number }) => {
    const { data } = await phpAxiosInstance.get(`photos?_start=${startIndex}&_limit=${stopIndex}`)
    return data
  },
)
