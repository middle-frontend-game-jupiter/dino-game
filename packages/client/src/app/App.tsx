import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { withHocs } from './hocs'
import './styles/index.css';
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import Grid from '@mui/material/Grid'

const App = () => (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
              <Grid >
                {element}
              </Grid>
          )}
        />
      ))}
    </Routes>
)

export default withHocs(App);

