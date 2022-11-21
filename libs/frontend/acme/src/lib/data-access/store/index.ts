import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import tableSlice from './slice'

const rootReducer = combineReducers({
  tableSlice,
})

const _store = configureStore({
  reducer: rootReducer,
})

export function setupStore() {
  return store
}

export const store = _store
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
