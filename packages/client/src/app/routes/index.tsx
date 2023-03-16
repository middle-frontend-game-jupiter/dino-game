import React from 'react'
import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from '@/pages/NotFound'
import { AuthPage } from '@/pages/Auth'
import { SignupPage } from '@/pages/Signup'
import { GamePreview } from '@/pages/GamePreview'
import { AuthGuard } from '@/entities/auth'
import { APP_ROUTES, RoutePath } from '@/shared/config'
import { ProfilePage } from '@/pages/Profile'

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: (
      <AuthGuard>
        <GamePreview />
      </AuthGuard>
    ),
  },
  [APP_ROUTES.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  [APP_ROUTES.SIGNUP]: {
    path: RoutePath.signup,
    element: <SignupPage />,
  },
  [APP_ROUTES.GAME]: {
    path: RoutePath.game,
    element: (
      <AuthGuard>
        <div>Game Page</div>
      </AuthGuard>
    ),
  },
  [APP_ROUTES.LEADERBOARD]: {
    path: RoutePath.leaderboard,
    element: (
      <AuthGuard>
        <div>LeaderBoard Page</div>
      </AuthGuard>
    ),
  },
  [APP_ROUTES.FORUM]: {
    path: RoutePath.forum,
    element: (
      <AuthGuard>
        <div>Forum Page</div>
      </AuthGuard>
    ),
  },
  [APP_ROUTES.PROFILE]: {
    path: RoutePath.profile,
    element: (
      <AuthGuard>
        <ProfilePage />
      </AuthGuard>
    ),
  },
  [APP_ROUTES.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  [APP_ROUTES.SETTINGS]: {
    path: RoutePath.settings,
    element: (
      <AuthGuard>
        <div>settings</div>
      </AuthGuard>
    ),
  },
}
