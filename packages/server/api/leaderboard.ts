import type { Request } from 'express';
import { HTTPClient } from './axios';

const params = {
  cursor: 0,
  limit: 100,
  ratingFieldName: 'dino_score',
  teamName: 'jupiter'
}

export async function getLeaderboardAll(cookie: Request['cookies']) {
  const { data } = await HTTPClient.post('leaderboard/all', params, {
    headers: {
      cookie
    }
  })

  return data;
}