import { ApiStatuses } from "./ApiStatuses";

export interface NonAutorizedResponse {
  reason: string;
  status: ApiStatuses.UNAUTORIZED;
}