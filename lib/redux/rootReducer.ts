/* Instruments */
import { groupAPI, roleAPI } from './services'
import { counterSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  [roleAPI.reducerPath]: roleAPI.reducer,
  [groupAPI.reducerPath]: groupAPI.reducer
}
