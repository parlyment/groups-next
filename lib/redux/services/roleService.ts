import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export type Role = {
  id: string
  name: string
}

export const roleAPI = createApi({
  reducerPath: 'roleAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Role'],
  endpoints: (build) => ({
    fetchAllRoles: build.query<Role[], void>({
      query: () => ({
        url: `/roles`,
      }),
      providesTags: (result) => ['Role'],
    }),
    createRole: build.mutation<Role, Role>({
      query: (role) => ({
        url: `/roles`,
        method: 'POST',
        body: role,
      }),
      invalidatesTags: ['Role'],
    }),
    updateRole: build.mutation<Role, Role>({
      query: (role) => ({
        url: `/roles/${role.id}`,
        method: 'PUT',
        body: role,
      }),
      invalidatesTags: ['Role'],
    }),
    deleteRole: build.mutation<Role, Role>({
      query: (role) => ({
        url: `/roles/${role.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Role'],
    }),
  }),
})
