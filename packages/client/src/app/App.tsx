import React from 'react'
import './styles/index.css'
import AppRoutes from './providers/router/ui/AppRouter'
import { Header } from '../widgets/Header'
import { SideBar } from '../widgets/SideBar'
import Box from '@mui/material/Box'
import { SIZE } from './styles/variables/global'
import { AppErrorBoundary, AppRouter, AppStore } from './hocs'
import { store } from './providers/store/config/store'

type App = {
  store: typeof store
  uri?: string
}

const Root = () => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Box display={'flex'} height={`calc(100vh - ${SIZE.HEADER_HEIGHT}px)`}>
        <SideBar />
        <AppRoutes />
      </Box>
    </Box>
  )
}

const App = ({
  store, uri = ''
}: App) => (
  <AppErrorBoundary>
    <AppStore store={store}>
      <AppRouter uri={uri}>
        <Root />
      </AppRouter>
    </AppStore>
  </AppErrorBoundary>
)

export default App
