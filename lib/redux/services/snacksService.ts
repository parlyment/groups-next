import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

export type Snack = {
  id: number
  name: string
}

export const snacksAPI = createApi({
  reducerPath: 'snacksAPI',
  tagTypes: ['Snack'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (build) => ({
    getSnacks: build.query<Snack[], string>({
      query: (limit = '') => `snacks?${limit && `_limit=${limit}`}`,
      providesTags: () => ['Snack'],
    }),
    addSnack: build.mutation<Snack, Snack>({
      query: (body) => ({
        url: 'snacks',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Snack'],
    }),
    deleteSnack:  build.mutation<Snack, number>({
      query: (id) => ({
        url: `snacks/${id}`,
          method: 'DELETE'
      }),
      invalidatesTags: ['Snack'],
    })
  })
})

export const {useGetSnacksQuery, useAddSnackMutation, useDeleteSnackMutation} = snacksAPI