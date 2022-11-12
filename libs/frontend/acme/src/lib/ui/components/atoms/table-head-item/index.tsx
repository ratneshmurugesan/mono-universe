import { ChangeEvent, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../../data-access/store'
import { selectSelectionMode } from '../../../../data-access/store/selector'
import { toggleAll, updateSelectionMode } from '../../../../data-access/store/slice'
import { StyledTh } from '../../../styles'
import { TTableHeadItem } from '../../../types'

export const TableHeadItem = ({ item }: { item: TTableHeadItem }) => {
  const dispatch = useAppDispatch()
  const checkboxRef = useRef<HTMLInputElement | null>(null)
  const selectedSelectionMode = useSelector(selectSelectionMode)

  const handleOnCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const checked = e.currentTarget.checked
    const selectionMode = checked ? 'all' : ''
    if (checked) {
      dispatch(toggleAll({ selectionMode }))
    }
    dispatch(updateSelectionMode({ selectionMode }))
  }

  useEffect(() => {
    const isIndeterminate = selectedSelectionMode === 'indeterminate'
    const isChecked = selectedSelectionMode === 'all'

    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = isIndeterminate
      checkboxRef.current.checked = isChecked
    }
    // if (checkboxRef.current) checkboxRef.current.checked = selectedSelectionMode === 'all'
    // if (checkboxRef.current) checkboxRef.current.checked = selectedSelectionMode !== 'all' && selectedSelectionMode !== 'indeterminate'
  }, [selectedSelectionMode])

  if (item['heading'] === 'checkbox')
    return (
      <StyledTh width={item.width}>
        <input type="checkbox" onChange={handleOnCheck} ref={checkboxRef} />
      </StyledTh>
    )
  return <StyledTh width={item.width}>{item['heading']}</StyledTh>
}
