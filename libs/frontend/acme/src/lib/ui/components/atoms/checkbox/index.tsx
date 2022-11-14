import { ChangeEvent } from 'react'
import { useAppDispatch } from '../../../../data-access/store'
import { updateBodyRowCheckbox } from '../../../../data-access/store/slice'
import { TTableRow } from '../../../types'

export const CustomCheckbox = ({ rowObj }: { rowObj: TTableRow }) => {
  const dispatch = useAppDispatch()

  const handleOnRowSelect = (e: ChangeEvent<HTMLInputElement>, selectedRowId: string) => {
    const selectedRowCheckedValue = e.currentTarget.checked
    dispatch(
      updateBodyRowCheckbox({
        selectedRowId: selectedRowId.toString(),
        selectedRowCheckedValue,
      }),
    )
  }

  return (
    <input
      name={rowObj['id']}
      type="checkbox"
      checked={!!rowObj['selected']}
      onChange={e => handleOnRowSelect(e, rowObj['id'])}
    />
  )
}
