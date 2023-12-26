import { type PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Group } from '../../services'

export type SelectedGroupSliceState = {
  group?: Group
}
const initialState: SelectedGroupSliceState = {}

export const selectedGroupSlice = createSlice({
  name: 'selectedGroup',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<Group | undefined>) => {
      state.group = action.payload
    },
  },
})
