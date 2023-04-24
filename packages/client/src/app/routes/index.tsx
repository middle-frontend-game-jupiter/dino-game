import React from 'react'
import { RouteProps } from 'react-router-dom'
import { NotFoundPage } from '@/pages/NotFound'
import { AuthPage } from '@/pages/Auth'
import { SignupPage } from '@/pages/Signup'
import { GamePreview } from '@/pages/GamePreview'
import { AuthGuard } from '@/entities/auth'
import { APP_ROUTES, RoutePath } from '@/shared/config'
import { ProfilePage } from '@/pages/Profile'
import { UserSettingsPage } from '@/pages/Settings'
import { ForumMessages } from '@/pages/ForumMessages/ui/ForumMessages'
import { LeaderboardPage } from '@/pages/Leaderboard'
import { LeaderboardGuard } from '@/entities/leaderboard/ui'
import Landing from '@/pages/Landing/ui/Landing'
import { ForumPage, Topic } from '@/pages/Forum'

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: <Landing />,
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
      <LeaderboardGuard>
        <AuthGuard>
          <GamePreview />
        </AuthGuard>
      </LeaderboardGuard>
    ),
  },
  [APP_ROUTES.LEADERBOARD]: {
    path: RoutePath.leaderboard,
    element: (
      <LeaderboardGuard>
        <AuthGuard>
          <LeaderboardPage />
        </AuthGuard>
      </LeaderboardGuard>
    ),
  },
  [APP_ROUTES.FORUM]: {
    path: RoutePath.forum,
    element: (
      <AuthGuard>
        <ForumPage />
      </AuthGuard>
    ),
  },

  [`${APP_ROUTES.FORUM}/:id`]: {
    path: `${RoutePath.forum}/:id`,
    element: <Topic />,
  },

  [APP_ROUTES.FORUM_MESSAGES]: {
    path: RoutePath.forum_messages,
    element: (
      <AuthGuard>
        <ForumMessages />
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
        <UserSettingsPage />
      </AuthGuard>
    ),
  },
}
