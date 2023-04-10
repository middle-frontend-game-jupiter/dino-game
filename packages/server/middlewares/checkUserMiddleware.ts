import type { NextFunction, Request, Response } from 'express'

import { getCurrentUser } from '../api/user'

export async function checkUserMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await getCurrentUser(req.headers.cookie)

    // @ts-expect-error
    res.user = {
      user,
      auth: true,
    };


} catch(error) {
    // @ts-expect-error

    res.user = {
      user: null,
      auth: false,
    };
  }


  next();
}