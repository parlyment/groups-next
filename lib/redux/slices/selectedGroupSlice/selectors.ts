import type { ReduxState } from '@/lib/redux'

export const selectGroup = (state: ReduxState) => state.selectedGroup.group
