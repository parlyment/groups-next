import type { ReduxState } from '@/lib/redux'

export const selectUsers = (state: ReduxState) => state.users.users