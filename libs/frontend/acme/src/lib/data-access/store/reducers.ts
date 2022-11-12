import { IAppState } from '../types'

export const reducers = {
  toggleSingle: (state: IAppState, action: { payload: any }) => {
    console.log('slice', { action })
    state.selectedRows = {
      ...state.selectedRows,
      [action.payload.selectedRowId]: action.payload.selectedRowCheckedValue,
    }
  },
  toggleAll: (state: IAppState, action: { payload: any }) => {
    console.log('slice', { action })
    const IdObj = { ...action.payload.IdObj }
    const selectionMode = action.payload.selectionMode
    Object.keys(action.payload.IdObj).forEach(id => {
      IdObj[id] = selectionMode === 'all' ? true : false
    })
    state.selectedRows = {
      ...state.selectedRows,
      ...IdObj,
    }
  },
  updateSelectionMode: (state: IAppState, action: { payload: any }) => {
    state.selectionMode = action.payload.selectionMode
  },
}
