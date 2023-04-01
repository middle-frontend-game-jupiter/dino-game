import {
  UpdatePasswordResponse,
  UserEntity,
  UserPasswordUpdate,
  UserProfileAvatar,
  UserServerEntity
} from '@/shared/types/User'
import { api } from '@/services/api'
import { UserMapper } from '@/mappers/User'
import { ApiError } from '@/shared/types/Errors'


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

      updateProfile: builder.mutation<UserServerEntity | ApiError, UserEntity>({
        query: data => ({
          url: 'user/profile',
          method: 'PUT',
          withCredentials: true,
          body: UserMapper.toApi(data),
        })
      })
    }),
  })

export const { useUpdateAvatarMutation, useUpdatePasswordMutation, useUpdateProfileMutation } = userApi

export const {
  endpoints: { updateAvatar, updatePassword, updateProfile },
} = userApi
