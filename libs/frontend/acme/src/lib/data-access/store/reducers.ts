import { IAppState } from '../types'

export const reducers = {
  updateHeaderCheckBox: (
    state: IAppState,
    action: {
      payload: { selectedRowId: 'header'; selectedRowCheckedValue: boolean }
    },
  ) => {
    const areAllBodyRowsChecked = Object.keys(state.selectedRows)
      .filter(id => id !== 'header')
      .every(id => state.selectedRows[id])

    if (action.payload.selectedRowCheckedValue) {
      Object.keys(state.selectedRows).forEach(id => {
        state.selectedRows[id] = true
      })
    } else if (!action.payload.selectedRowCheckedValue) {
      Object.keys(state.selectedRows).forEach(id => {
        state.selectedRows[id] = false
      })
    } else if (areAllBodyRowsChecked) {
      Object.keys(state.selectedRows).forEach(id => {
        state.selectedRows[id] = true
      })
    }

    state.selectedRows = {
      ...state.selectedRows,
      [action.payload.selectedRowId]: action.payload.selectedRowCheckedValue,
    }
  },
  updateBodyRowCheckbox: (
    state: IAppState,
    action: { payload: { selectedRowId: string | number; selectedRowCheckedValue: boolean } },
  ) => {
    state.selectedRows = {
      ...state.selectedRows,
      [action.payload.selectedRowId]: action.payload.selectedRowCheckedValue,
    }
  },
  updateColumnWidth: (
    state: IAppState,
    action: { payload: { dataKey: string | number; value: number } },
  ) => {
    state.colWidthMap = {
      ...state.colWidthMap,
      [action.payload.dataKey]: action.payload.value,
    }
  },
  updateColumnAlign: (
    state: IAppState,
    action: { payload: { dataKey: string | number; value: string } },
  ) => {
    state.colAlignMap = {
      ...state.colAlignMap,
      [action.payload.dataKey]: action.payload.value,
    }
  },
}
