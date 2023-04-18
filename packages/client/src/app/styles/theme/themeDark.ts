import type { PaletteOptions, ThemeOptions } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme'

export const palette: PaletteOptions = {
  mode: 'dark',
}

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'Inter, sans-serif',
}

export const themeOptions: ThemeOptions = {
  palette,
  typography,
}

const themeDark = createTheme(themeOptions)

export default themeDark
