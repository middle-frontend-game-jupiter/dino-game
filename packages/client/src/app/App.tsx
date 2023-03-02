import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.css'
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { withRootHocs } from '@/app/hocs/withRootHocs'
import  Box  from '@mui/material/Box'

const App = () => {

  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Box>
              {element}
            </Box>
          )}
        />
      ))}
    </Routes>
  )
}

export default withRootHocs(App)

