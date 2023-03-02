import React  from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.css'
import { routeConfig } from '@/shared/config/routeConfig/routeConfig'
import Grid from '@mui/material/Grid'
import { withHocs } from '@/app/hocs/withHocs'

const App = () => {

  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Grid>
              {element}
            </Grid>
          )}
        />
      ))}
    </Routes>
  )
}

export default withHocs(App)

