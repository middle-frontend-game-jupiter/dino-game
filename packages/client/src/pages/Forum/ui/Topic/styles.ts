import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    padding: 2,
    flex: 1,
  },
  button: {
    height: 'fit-content',
  },
  paper: {
    marginTop: 2,
    paddingY: 1,
    paddingX: 2,
  },
})
