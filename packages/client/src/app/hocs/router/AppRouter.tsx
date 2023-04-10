import React, { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { StaticRouter } from 'react-router-dom/server';

const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

type WithRouterHoc = {
  children: ReactElement | ReactElement[];
  uri?: string;
}

export const AppRouter = ({ children, uri = '/' }: WithRouterHoc) => {
  return (
  !isServer 
    ? <BrowserRouter>{children}</BrowserRouter>
    : <StaticRouter location={uri}>{children}</StaticRouter>
  )
}

