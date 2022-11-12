import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { IAppState } from '../types'
import { fetchAlbumData } from './slice'

export const extraReducers = (builder: ActionReducerMapBuilder<IAppState>) => {
  builder
    .addCase(fetchAlbumData.pending, (state, action) => {
      state.albums.status = 'loading'
      state.albums.isLoading = true
      console.log({ state, action })
    })
    .addCase(fetchAlbumData.fulfilled, (state, action) => {
      if (action?.meta?.requestStatus === 'fulfilled') {
        state.albums.status = 'fulfilled'
        state.albums.message = action.payload.message ?? 'success'
        state.albums.data = action?.payload.slice(0, 20) ?? []
        state.albums.isLoading = false
        console.log({ state, action })
      }
    })
    .addCase(fetchAlbumData.rejected, (state, action) => {
      state.albums.status = 'failed'
      state.albums.isError = true
      state.albums.message = action.error.message ?? 'failed'
      state.albums.isLoading = false
      console.log({ state, action })
    })
}
