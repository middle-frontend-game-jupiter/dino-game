import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://ya-praktikum.tech/api/v2'
export const BASE_RESOURCES_URL = 'https://ya-praktikum.tech/api/v2/resources'
export const BASE_API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'https://ya-praktikum.tech/api';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: 'include',
  mode: 'cors',
})

export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
})
