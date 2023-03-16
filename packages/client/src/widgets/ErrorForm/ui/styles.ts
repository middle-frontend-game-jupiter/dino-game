import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    flexDirection: 'column',
    padding: '8px 16px',
    gap: 1,
    height: '100vh',
  },
})
