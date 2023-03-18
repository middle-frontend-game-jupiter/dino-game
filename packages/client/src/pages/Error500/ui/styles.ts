import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
})
