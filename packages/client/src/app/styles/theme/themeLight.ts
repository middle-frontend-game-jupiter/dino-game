import type { PaletteOptions, ThemeOptions } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme'

export const palette: PaletteOptions = {
  mode: 'light',
}

export const typography: ThemeOptions['typography'] = {
  fontFamily: 'Inter, sans-serif',
}

export const themeOptions: ThemeOptions = {
  palette,
  typography,
}

const themeLight = createTheme(themeOptions)

export default themeLight
