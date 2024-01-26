import { createSlice} from '@reduxjs/toolkit'
import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'

type Geo = {
  lat: string
  lng: string
};

type Address = {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
};

type Company = {
  name: string
  catchPhrase: string
  bs: string
};

export type User = {
  id: number
  name: string
  username: string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
}
export type UsersSliceState = {
  status: string | null
  error: string | undefined
  users: User[]
}

const initialState: UsersSliceState = {
  users: [],
  status: null,
  error: undefined,
}

export const fetchUsers = createAppAsyncThunk('users/fetchUsers',
  async (_, {rejectWithValue}) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) {
      throw new Error('Error')
    }
    return await response.json()

  } catch (err) {
    if(err instanceof Error) return rejectWithValue(err.message)
  }
})

export const deleteUsersOnServer = createAppAsyncThunk('users/deleteUsers',
  async (_, {rejectWithValue, dispatch}) => {
    dispatch(usersSlice.actions.deleteUsers())
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'DELETE'})
      if(!response.ok) {
        throw new Error('No removal!')
      }
    } catch (err) {
      if(err instanceof Error) return rejectWithValue(err.message)
    }
  })

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    deleteUsers: (state) => {
      state.users = []
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state: UsersSliceState) => {
      state.status = 'loading'
      state.error = undefined
    })
    builder.addCase(fetchUsers.fulfilled, (state: UsersSliceState, action) => {
      state.status = 'resolved'
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state: UsersSliceState, action) => {
      state.status = 'rejected'
      state.error = action.payload
    })
  }
})