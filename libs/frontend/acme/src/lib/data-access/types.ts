export type TResponse = {
  isLoading: boolean
  isError: boolean
  status: string
  data: { [key: string]: string | number }[]
  message: string
}
export type TCheckboxSelectionMode = 'all' | 'indeterminate' | 'none'
export interface IAppState {
  selectedRows: { [key: string]: boolean }
  albums: TResponse
  colWidthMap: { [key: string]: number }
  colAlignMap: { [key: string]: string }
}
