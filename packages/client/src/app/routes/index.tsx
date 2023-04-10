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
import { ForumList } from '@/pages/Forum/ui/Forum'
import { ForumMessages } from '@/pages/ForumMessages/ui/ForumMessages'
import { LeaderboardPage } from '@/pages/Leaderboard'
import { LeaderboardGuard } from '@/entities/leaderboard/ui'

export const routeConfig: Record<APP_ROUTES, (RouteProps & { loader?: (args: any) => any })> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: (
      <AuthGuard>
        <div>Landing</div>
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
        <ForumList />
      </AuthGuard>
    ),
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
