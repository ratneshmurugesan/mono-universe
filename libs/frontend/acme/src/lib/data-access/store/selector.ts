import { RootState } from '.'

export const selectAlbums = (state: RootState) => state.tableSlice.albums
export const selectSelectedRows = (state: RootState) => state.tableSlice.selectedRows
export const selectSelectionMode = (state: RootState) => state.tableSlice.selectionMode
