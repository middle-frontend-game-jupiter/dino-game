export const YANDEX_OAUTH_CLIENT_ID = '4c852e7b68894c0085e001cb6eb19861'
// !TODO: Где лучше хранить secret?
export const YANDEX_OAUTH_CLIENT_SECRET = '407859c462a04dd18901476674fc2aa9'
export const YANDEX_OAUTH_GET_CODE_PATH = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${YANDEX_OAUTH_CLIENT_ID}&force_confirm=yes`
export const YANDEX_BASIC_AUTH_HASH = window.btoa(
  `${YANDEX_OAUTH_CLIENT_ID}:${YANDEX_OAUTH_CLIENT_SECRET}`
)

export enum APP_ROUTES {
  MAIN = 'main',
  AUTH = 'auth',
  SIGNUP = 'signup',
  GAME = 'game',
  LEADERBOARD = 'leaderboard',
  FORUM = 'forum',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  SETTINGS = 'settings',
  YANDEX_OAUTH = 'yandex_oauth',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.AUTH]: '/auth',
  [APP_ROUTES.SIGNUP]: '/signup',
  [APP_ROUTES.GAME]: '/game',
  [APP_ROUTES.LEADERBOARD]: '/leaderboard',
  [APP_ROUTES.FORUM]: '/forum',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.NOT_FOUND]: '*',
  [APP_ROUTES.SETTINGS]: '/settings',
  [APP_ROUTES.YANDEX_OAUTH]: '/yandex-oauth',
}
