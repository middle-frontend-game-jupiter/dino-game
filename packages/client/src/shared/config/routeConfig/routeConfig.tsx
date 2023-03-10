import { RouteProps } from 'react-router-dom';
import React from 'react'
import { NotFoundPage } from '@/pages/NotFound'
import { AuthPage } from '@/pages/Auth'
import { SignupPage } from '@/pages/Signup'
import { GamePreview } from '@/pages/GamePreview';
import { Viewer } from '@/entities/auth';

// это должно лежать на уровне app/pages
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

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
    [APP_ROUTES.MAIN]: {
        path: RoutePath.main,
        element: <Viewer><GamePreview /></Viewer>,
    },

    [APP_ROUTES.AUTH]: {
        path: RoutePath.auth,
        element: <AuthPage/>,
    },
    [APP_ROUTES.SIGNUP]: {
        path: RoutePath.signup,
        element: <SignupPage/>,
    },
    [APP_ROUTES.GAME]: {
        path: RoutePath.game,
        element: <Viewer><div>Game Page</div></Viewer>,
    },
    [APP_ROUTES.LEADERBOARD]: {
        path: RoutePath.leaderboard,
        element: <Viewer><div>LeaderBoard Page</div></Viewer>,
    },
    [APP_ROUTES.FORUM]: {
        path: RoutePath.forum,
        element: <Viewer><div>Forum Page</div></Viewer>,
    },
    [APP_ROUTES.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
