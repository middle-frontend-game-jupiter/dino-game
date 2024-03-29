export interface UserSignIn {
  login: string
  password: string
}

export interface UserEntity {
  id: number
  firstName: string
  secondName: string
  displayName: string
  login: string
  email: string
  phone: string
  avatar: string
}

export interface UserServerEntity {
  id: number
  first_name: string
  second_name: string
  login: string
  email: string
  password: string
  phone: string
  avatar: string
}

export interface AuthResponse {
  id: number
}

export interface UserProfileAvatar {
  avatar: string
}

export interface UserPasswordUpdate {
  oldPassword: string
  newPassword: string
}

export interface UpdatePasswordResponse {
  success: boolean
  message?: string
}

export interface IServiceId {
  service_id: string
}

export interface IOauthYandex {
  code: string
  redirect_uri?: string
}
