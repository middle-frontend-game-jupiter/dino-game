import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = 'http://localhost:3002/api/v2'
export const BASE_RESOURCES_URL = `${BASE_URL}/resources`

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  mode: 'cors',
})

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
})
