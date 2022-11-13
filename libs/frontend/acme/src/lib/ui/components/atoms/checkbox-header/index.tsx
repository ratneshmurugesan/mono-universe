import { ChangeEvent, useRef, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../data-access/store'
import { selectSelectedRows } from '../../../../data-access/store/selector'
import { updateHeaderCheckBox } from '../../../../data-access/store/slice'

export const CustomHeaderCheckbox = () => {
  const dispatch = useAppDispatch()
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const selectedSelectedRows = useAppSelector(selectSelectedRows)

  const areAllBodyRowsChecked = Object.keys(selectedSelectedRows)
    .filter(id => id !== 'header')
    .every(id => selectedSelectedRows[id])

  const atleastOneBodyRowUnChecked = Object.keys(selectedSelectedRows)
    .filter(id => id !== 'header')
    .some(id => selectedSelectedRows[id])

  useEffect(() => {
    const isChecked = areAllBodyRowsChecked
    const isIndeterminate = atleastOneBodyRowUnChecked && !areAllBodyRowsChecked
    const isNone = !isChecked && !isIndeterminate

    if (checkboxRef.current) {
      if (isNone) {
        checkboxRef.current.indeterminate = false
        checkboxRef.current.checked = false
      } else if (isChecked) {
        checkboxRef.current.indeterminate = false
        checkboxRef.current.checked = true
      } else if (isIndeterminate) {
        checkboxRef.current.indeterminate = true
        checkboxRef.current.checked = false
      }
    }
  }, [areAllBodyRowsChecked, atleastOneBodyRowUnChecked])

  const handleOnHeaderRowCheckboxSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedRowCheckedValue = e.currentTarget.checked
    dispatch(
      updateHeaderCheckBox({
        selectedRowId: 'header',
        selectedRowCheckedValue,
      }),
    )
  }

  return (
    <input type="checkbox" ref={checkboxRef} onChange={e => handleOnHeaderRowCheckboxSelect(e)} />
  )
}
