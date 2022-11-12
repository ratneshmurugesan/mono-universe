export type TResponse = {
  isLoading: boolean
  isError: boolean
  status: string
  data: { [key: string]: string | number }[]
  message: string
}
export type TSelectionMode = 'all' | 'indeterminate' | ''
export interface IAppState {
  selectedRows: { [key: string]: boolean }
  selectionMode: TSelectionMode
  albums: TResponse
}
// export type TPayload = {
//   selectedRowId?: number
//   selectedRowCheckedValue?: boolean
//   IdObj?: { [key: string]: boolean }
//   selectionMode?: TSelectionMode
// }
