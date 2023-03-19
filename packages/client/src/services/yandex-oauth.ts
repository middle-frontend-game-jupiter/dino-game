import {
  YANDEX_OAUTH_CLIENT_ID,
  YANDEX_OAUTH_CLIENT_SECRET,
} from '@/shared/config'
import { oauthApi } from './oauth-api'

const BASE_URL = 'https://oauth.yandex.ru'

const yandexOAuthApi = oauthApi
  .enhanceEndpoints({ addTagTypes: ['yandexOAuthApi'] })
  .injectEndpoints({
    endpoints: builder => ({
      getYandexOAuthToken: builder.mutation({
        query: data => {
          const urlEncoded = new URLSearchParams()
          urlEncoded.append('grant_type', 'code')
          urlEncoded.append('client_id', YANDEX_OAUTH_CLIENT_ID)
          urlEncoded.append('client_secret', YANDEX_OAUTH_CLIENT_SECRET)
          urlEncoded.append('code', data)
          return {
            url: `${BASE_URL}`,
            method: 'POST',
            withCredentials: true,
            body: urlEncoded.toString(),
            headers: {
              ['Content-Length']: new TextEncoder()
                .encode(urlEncoded.toString())
                .length.toString(),
            },
          }
        },
      }),
    }),
  })

export const { useGetYandexOAuthTokenMutation } = yandexOAuthApi
