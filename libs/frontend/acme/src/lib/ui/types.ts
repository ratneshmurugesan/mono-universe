export type TTableCol = Array<TTableHeadItem>
export type TTableRow = { [key: string]: string }
export type TTableHeadItem = {
  heading: string
  value: string
  numeric: boolean
  width: string
}
