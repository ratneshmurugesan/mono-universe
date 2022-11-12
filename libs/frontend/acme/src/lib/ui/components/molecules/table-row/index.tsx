import { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../data-access/store'
import { toggleSingle } from '../../../../data-access/store/slice'
import { StyledTd } from '../../../styles'
import { TTableCol, TTableRow } from '../../../types'

export const TableRow = ({ rowObj, column }: { rowObj: TTableRow; column: TTableCol }) => {
  const dispatch = useAppDispatch()

  console.log({ rowObj })

  const handleOnRowClick = (rowObj: TTableRow, selectedRowId: string) => {
    console.log({ rowObj, selectedRowId })
  }
  const handleOnRowSelect = (e: ChangeEvent<HTMLInputElement>, selectedRowId: string) => {
    const selectedRowCheckedValue = e.currentTarget.checked
    console.log({ selectedRowId, selectedRowCheckedValue })

    dispatch(
      toggleSingle({
        selectedRowId,
        selectedRowCheckedValue,
      }),
    )
    // dispatch(updateSelectionMode({ selectionMode: '' }))
  }
  return (
    <tr>
      {column.map(columnItem => {
        const align = columnItem['numeric'] ? 'right' : 'left'
        if (columnItem['heading'] === 'checkbox')
          return (
            <StyledTd>
              <input
                type="checkbox"
                checked={rowObj['selected']}
                onChange={e => handleOnRowSelect(e, rowObj['id'])}
              />
            </StyledTd>
          )
        if (columnItem['heading'] === 'thumbnail')
          return (
            <StyledTd>
              <img src={rowObj['thumbnailUrl']} alt={rowObj['title']} width="50px" />
            </StyledTd>
          )
        return (
          <StyledTd align={align} onClick={() => handleOnRowClick(rowObj, rowObj['id'])}>
            {rowObj[`${columnItem['value']}`]}
          </StyledTd>
        )
      })}
    </tr>
  )
}
