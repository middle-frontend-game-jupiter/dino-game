import React  from 'react'
import Box from '@mui/material/Box'

import { Route, Routes } from 'react-router-dom'
import { withRootHocs } from '@/app/hocs/withRootHocs'
import { routeConfig } from './routes';

import './styles/index.css'

const App = () => (
  <Routes>
    {
      Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Box>
              {element}
            </Box>
          )}
        />
      ))
    }
  </Routes>
)


export default withRootHocs(App)

