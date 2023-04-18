import type { Request } from "express"

import { HTTPClient } from "./axios"

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

export async function getCurrentUser(cookie: Request['cookies']) {
  const { data } = await HTTPClient.get<UserServerEntity>('auth/user', {
    headers: { cookie }
  })

  return data;
}