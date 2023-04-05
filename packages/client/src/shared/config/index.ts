export enum APP_ROUTES {
  MAIN = 'main',
  AUTH = 'auth',
  SIGNUP = 'signup',
  GAME = 'game',
  LEADERBOARD = 'leaderboard',
  FORUM = 'forum',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
  ERROR500 = 'error500',
  SETTINGS = 'settings',
  FORUM_MESSAGES = 'forum_messages',
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
  [APP_ROUTES.ERROR500]: '/500',
  [APP_ROUTES.SETTINGS]: '/settings',
  [APP_ROUTES.FORUM_MESSAGES]: '/forum_messages',
}
