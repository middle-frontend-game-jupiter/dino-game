import {
  UserSignIn,
  AuthResponse,
  UserServerEntity,
  IServiceId,
  IOauthYandex,
} from '@/shared/types/User'
import { api } from './api'

const isServer = typeof window === 'undefined';

export const REDIRECT_URI = `${isServer ? '' : window.location.origin}/`

export const authApi = api
  .enhanceEndpoints({ addTagTypes: ['authApi'] })
  .injectEndpoints({
    endpoints: builder => ({
      signIn: builder.mutation<AuthResponse, UserSignIn>({
        query: credentials => ({
          url: 'auth/signin',
          method: 'POST',
          withCredentials: true,
          body: credentials,
        }),
      }),

      signUp: builder.mutation({
        query: credentials => ({
          url: 'auth/signup',
          method: 'POST',
          withCredentials: true,
          body: credentials,
        }),
      }),

      logout: builder.mutation({
        query: () => ({
          url: 'auth/logout',
          method: 'POST',
          withCredentials: true,
        }),
      }),

      getUser: builder.mutation<UserServerEntity, unknown>({
        query: () => ({
          url: 'auth/user',
          method: 'GET',
          withCredentials: true,
        }),
      }),

      getServiceId: builder.mutation<IServiceId, unknown>({
        query: () => ({
          url: 'oauth/yandex/service-id',
          method: 'GET',
          withCredentials: true,
          params: { redirect_uri: REDIRECT_URI },
        }),
      }),

      oauthYandex: builder.mutation({
        query: (payload: IOauthYandex) => ({
          url: 'oauth/yandex',
          method: 'POST',
          withCredentials: true,
          body: { code: payload.code, redirect_uri: payload.redirect_uri },
        }),
      }),
    }),
  })

export const {
  useSignInMutation,
  useSignUpMutation,
  useLogoutMutation,
  useGetUserMutation,
  useGetServiceIdMutation,
  useOauthYandexMutation,
} = authApi

export const {
  endpoints: { signIn, signUp, logout, getUser, getServiceId, oauthYandex },
} = authApi
