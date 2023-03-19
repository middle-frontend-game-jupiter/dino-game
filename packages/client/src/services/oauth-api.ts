import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { YANDEX_BASIC_AUTH_HASH } from '@/shared/config'

const baseQuery = fetchBaseQuery({
  // baseUrl: BASE_URL,
  credentials: 'include',
  mode: 'cors',
  prepareHeaders: (headers, { getState }) => {
    headers.set('Content-type', 'application/x-www-form-urlencoded')
    headers.set('Authorization', `Basic ${YANDEX_BASIC_AUTH_HASH}`)
    return headers
  },
})

export const oauthApi = createApi({
  baseQuery,
  endpoints: builder => ({}),
})
