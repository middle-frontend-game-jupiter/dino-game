import { UserSignInDto, AuthResponse, UserServerEntity } from '@/shared/types/User'
import { api } from './api';

export const authApi = api
  .enhanceEndpoints({ addTagTypes: ['authApi'] })
  .injectEndpoints({
    endpoints: (builder) => ({
      signIn: builder.mutation<AuthResponse, UserSignInDto>({
        query: (credentials) => ({
          url: "auth/signin",
          method: "POST",
          withCredentials: true,
          body: credentials
        }),
      }),

      signUp: builder.mutation({
        query: (credentials) => ({
          url: "auth/signup",
          method: "POST",
          withCredentials: true,
          body: credentials
        })
      }),

      me: builder.mutation<UserServerEntity, unknown>({
        query: () => ({
          url: "auth/user",
          method: "GET",
          withCredentials: true,
        })
      })
    }),
})

export const {
  useSignInMutation,
  useSignUpMutation,
  useMeMutation,
} = authApi

export const {
  endpoints: { signIn, signUp, me },
} = authApi