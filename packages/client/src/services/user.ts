import {
  UpdatePasswordResponse,
  UserPasswordUpdate,
  UserProfileAvatar,
} from '@/shared/types/User'
import { api } from '@/services/api'

export const userApi = api
  .enhanceEndpoints({ addTagTypes: ['userApi'] })
  .injectEndpoints({
    endpoints: builder => ({
      updateAvatar: builder.mutation<UserProfileAvatar, FormData>({
        query: data => ({
          url: 'user/profile/avatar',
          method: 'PUT',
          withCredentials: true,
          body: data,
        }),
      }),

      updatePassword: builder.mutation<
        UpdatePasswordResponse,
        UserPasswordUpdate
      >({
        query: data => ({
          url: 'user/password',
          method: 'PUT',
          withCredentials: true,
          body: data,
        }),
      }),
    }),
  })

export const { useUpdateAvatarMutation, useUpdatePasswordMutation } = userApi

export const {
  endpoints: { updateAvatar, updatePassword },
} = userApi
