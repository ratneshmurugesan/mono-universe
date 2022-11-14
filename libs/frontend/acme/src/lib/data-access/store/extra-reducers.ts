import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { fetchAlbumData } from '../api'

import { IAppState } from '../types'

export const extraReducers = (builder: ActionReducerMapBuilder<IAppState>) => {
  builder
    .addCase(fetchAlbumData.pending, (state, action) => {
      state.albums.status = 'loading'
      state.albums.isLoading = false
    })
    .addCase(fetchAlbumData.fulfilled, (state, action) => {
      if (action?.meta?.requestStatus === 'fulfilled') {
        state.albums.status = 'fulfilled'
        state.albums.data = action?.payload ?? []
        const availableRowIds: { [key: string]: boolean } = {}
        state.albums.data.forEach(obj => (availableRowIds[obj['id']] = false))
        state.selectedRows = { ...availableRowIds, header: false }
        state.albums.isLoading = false
      }
    })
    .addCase(fetchAlbumData.rejected, (state, action) => {
      state.albums.status = 'failed'
      state.albums.isError = true
      state.albums.isLoading = false
    })
}
