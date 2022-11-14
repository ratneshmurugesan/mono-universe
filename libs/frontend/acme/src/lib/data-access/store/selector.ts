import { RootState } from '.'

export const selectAlbums = (state: RootState) => state.tableSlice.albums
export const selectSelectedRows = (state: RootState) => state.tableSlice.selectedRows
export const selectColWidthMap = (state: RootState) => state.tableSlice.colWidthMap
export const selectColAlignMap = (state: RootState) => state.tableSlice.colAlignMap
