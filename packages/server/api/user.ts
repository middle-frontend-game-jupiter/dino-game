import type { Request } from "express"

import { HTTPClient } from "./axios"

// import type { UserServerEntity } from 'client/src/shared/types/User';

export async function getCurrentUser(cookie: Request['cookies']) {
  const { data } = await HTTPClient.get<any>('auth/user', {
    headers: { cookie }
  })

  return data;
}