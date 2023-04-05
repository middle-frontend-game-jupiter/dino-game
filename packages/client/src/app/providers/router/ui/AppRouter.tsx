import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '@/app/routes'
import Grid from '@mui/material/Grid'

const AppRouter: FC = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={<Grid container>{element}</Grid>}
      />
    ))}
  </Routes>
)

export default AppRouter
