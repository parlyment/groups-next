/* Instruments */
import { groupAPI, roleAPI } from './services'
import { counterSlice } from './slices'
import { selectedGroupSlice } from './slices/selectedGroupSlice'

export const reducer = {
  counter: counterSlice.reducer,
  selectedGroup: selectedGroupSlice.reducer,
  [roleAPI.reducerPath]: roleAPI.reducer,
  [groupAPI.reducerPath]: groupAPI.reducer,
}
