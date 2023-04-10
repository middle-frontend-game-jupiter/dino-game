declare const __SERVER_PORT__: number

declare type InitialState = {
  user: UserServerEntity;
  auth: boolean;
}

declare global {
  interface Window {
    initialState: InitialState;
  }
}
  