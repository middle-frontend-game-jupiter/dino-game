import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'https://ya-praktikum.tech/api/v2'

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL
})


export const api = createApi({
  baseQuery,
  endpoints: () => ({}),
})