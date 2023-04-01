import { ApiStatuses } from './ApiStatuses'

export interface NonAutorizedResponse {
  reason: string
  status: ApiStatuses.UN_AUTHORIZED
}

export interface ApiError {
  data: NonAutorizedResponse
  status: 400
}