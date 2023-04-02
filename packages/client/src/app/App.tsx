import React from 'react'
import { withRootHocs } from '@/app/hocs/withRootHocs'
import './styles/index.css'
import AppRouter from '@/app/providers/router/ui/AppRouter'
import { Header } from '@/widgets/Header'
import { SideBar } from '@/widgets/SideBar'
import Box from '@mui/material/Box'
import { SIZE } from '@/app/styles/variables/global'

const App = () => {
  return (
    <Box minHeight="100vh">
      <Header />
      <Box display={'flex'} height={`calc(100vh - ${SIZE.HEADER_HEIGHT}px)`}>
        <SideBar />
        <AppRouter />
      </Box>
    </Box>
  )
}

export default withRootHocs(App)
