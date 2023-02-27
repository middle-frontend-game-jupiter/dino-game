import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { routes } from '@/pages'
import { withHocs } from './hocs'
import { Menu } from '@/shared/ui'

const App = () => (
  <div className="App">

    <Menu routes={routes}/>

    <Routes>
      {routes.map(route => <Route path={route.path} element={route.component} />)}
    </Routes>

  </div>
)

export default withHocs(App);

