import React from "react";
import { IRoute } from '@/shared/types/routes-type'

export const routes: IRoute[] = [
  {
    name: "Корень",
    path: "/",
    component: <div>Root Page</div>
  },
  {
    name: "Авторизоваться",
    path: "/auth",
    component: <div>Auth Page</div>
  },
  {
    name: "Игра",
    path: "/game",
    component: <div>Game Page</div>,
    showInMenu: true,
  },
  {
    name: "Таблица рекордов",
    path: "/leaderboard",
    component: <div>LeaderBoard Page</div>,
    showInMenu: true,
  },
  {
    name: "Форум",
    path: "/forum",
    component: <div>Forum Page</div>,
    showInMenu: true,
  },
  {
    name: "Ошибка",
    path: "*",
    component: <div>Not Found</div>
  }
]
