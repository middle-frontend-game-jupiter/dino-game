import React from 'react'
import './styles/index.css'
import AppRouter from '@/app/providers/router/ui/AppRouter'
import { Header } from '@/widgets/Header'
import { SideBar } from '@/widgets/SideBar'
import Box from '@mui/material/Box'
import { MODE, SIZE } from '@/app/styles/variables/global'
import themeLight from '@/app/styles/theme/themeLight'
import themeDark from '@/app/styles/theme/themeDark'
import { CssBaseline, GlobalStyles } from '@mui/material'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { useAppSelector } from '@/app/hooks/redux'
import { getTheme } from '@/entities/app/model/selectors'

const App = () => {
  const theme = useAppSelector(getTheme)

  console.log(theme)

  return (
    <ThemeProvider theme={theme === MODE.LIGHT ? themeLight : themeDark}>
      {/* <GlobalStyles styles={{}} /> */}
      {/* <CssBaseline /> */}
      <Box minHeight="100vh">
        <Header />
        <Box display={'flex'} height={`calc(100vh - ${SIZE.HEADER_HEIGHT}px)`}>
          <SideBar />
          <AppRouter />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
