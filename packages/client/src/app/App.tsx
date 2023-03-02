import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.css'
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import { withHocs } from '@/app/hocs/withHocs'
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

export default withHocs(App)

