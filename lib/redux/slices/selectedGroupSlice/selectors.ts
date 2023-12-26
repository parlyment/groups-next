import type { ReduxState } from '@/lib/redux'

export const selectSelectedGroup = (state: ReduxState) => state.selectedGroup.group
