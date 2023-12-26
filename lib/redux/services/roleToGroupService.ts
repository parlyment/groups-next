import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export type RoleToGroup = {
  id: string
  group_id: string
  role_id: string
}

export const roleToGroupAPI = createApi({
  reducerPath: 'roleToGroupAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['RoleToGroup'],
  endpoints: (build) => ({
    fetchAllRolesToGroup: build.query<RoleToGroup[], string>({
      query: (group_id) => ({
        url: '/roleToGroup',
        params: {
            group_id: group_id,
        }
      }),
      providesTags: (result) => ['RoleToGroup'],
    }),
    createRoleToGroup: build.mutation<RoleToGroup, RoleToGroup>({
      query: (roleToGroup) => ({
        url: `/roleToGroup`,
        method: 'POST',
        body: roleToGroup,
      }),
      invalidatesTags: ['RoleToGroup'],
    }),
    deleteRoleToGroup: build.mutation<RoleToGroup, RoleToGroup>({
      query: (roleToGroup) => ({
        url: `/roleToGroup/${roleToGroup.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['RoleToGroup'],
    }),
  }),
})
