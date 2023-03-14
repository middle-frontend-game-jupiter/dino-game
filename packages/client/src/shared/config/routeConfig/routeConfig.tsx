import { RouteProps } from 'react-router-dom'
import React from 'react'
import { NotFoundPage } from '@/pages/NotFound'
import { AuthPage } from '@/pages/Auth'
import { SignupPage } from '@/pages/Signup'
import { ProfileEditPage } from '@/pages/Profile'
import { ProfilePage } from '@/pages/Profile'

export enum APP_ROUTES {
  MAIN = 'main',
  AUTH = 'auth',
  SIGNUP = 'signup',
  PROFILE = 'profile',
  PROFILE_EDIT = 'profile_edit',
  PROFILE_EDIT_PSWD = 'profile_edit_pswd',
  GAME = 'game',
  LEADERBOARD = 'leaderboard',
  FORUM = 'forum',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.AUTH]: '/auth',
  [APP_ROUTES.SIGNUP]: '/signup',
  [APP_ROUTES.PROFILE]: '/profile',
  [APP_ROUTES.PROFILE_EDIT]: '/profile-edit',
  [APP_ROUTES.PROFILE_EDIT_PSWD]: '/profile-edit-pswd',
  [APP_ROUTES.GAME]: '/game',
  [APP_ROUTES.LEADERBOARD]: '/leaderboard',
  [APP_ROUTES.FORUM]: '/forum',
  [APP_ROUTES.NOT_FOUND]: '*',
}

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: <div>Root Page</div>,
  },
  [APP_ROUTES.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  [APP_ROUTES.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignupPage />,
  },
  [APP_ROUTES.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [APP_ROUTES.PROFILE_EDIT]: {
    path: RoutePath.profile_edit,
    element: <ProfileEditPage />,
  },
  [APP_ROUTES.PROFILE_EDIT_PSWD]: {
    path: RoutePath.profile_edit_pswd,
    element: <div>Profile page</div>,
  },
  [APP_ROUTES.GAME]: {
    path: RoutePath.game,
    element: <div>Game Page</div>,
  },
  [APP_ROUTES.LEADERBOARD]: {
    path: RoutePath.leaderboard,
    element: <div>LeaderBoard Page</div>,
  },
  [APP_ROUTES.FORUM]: {
    path: RoutePath.forum,
    element: <div>Forum Page</div>,
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
