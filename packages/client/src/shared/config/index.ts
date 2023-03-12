export enum APP_ROUTES {
  MAIN = 'main',
  AUTH = 'auth',
  SIGNUP = 'signup',
  GAME = 'game',
  LEADERBOARD = 'leaderboard',
  FORUM = 'forum',
  NOT_FOUND = 'not_found'
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.AUTH]: '/auth',
  [APP_ROUTES.SIGNUP]: '/signup',
  [APP_ROUTES.GAME]: '/game',
  [APP_ROUTES.LEADERBOARD]: '/leaderboard',
  [APP_ROUTES.FORUM]: '/forum',
  [APP_ROUTES.NOT_FOUND]: '*',
};
