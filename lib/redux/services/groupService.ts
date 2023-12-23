import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export type Group = {
  id: string
  name: string
}

export const groupAPI = createApi({
  reducerPath: 'groupAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  tagTypes: ['Group'],
  endpoints: (build) => ({
    fetchAllGroups: build.query<Group[], any>({
      query: () => ({
        url: `/groups`,
      }),
      providesTags: (result) => ['Group'],
    }),
    createGroup: build.mutation<Group, Group>({
      query: (group) => ({
        url: `/groups`,
        method: 'POST',
        body: group,
      }),
      invalidatesTags: ['Group'],
    }),
    updateGroup: build.mutation<Group, Group>({
      query: (group) => ({
        url: `/groups/${group.id}`,
        method: 'PUT',
        body: group,
      }),
      invalidatesTags: ['Group'],
    }),
    deleteGroup: build.mutation<Group, Group>({
      query: (group) => ({
        url: `/groups/${group.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Group'],
    }),
  }),
})
