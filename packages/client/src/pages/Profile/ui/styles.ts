import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 2,
    height: '100vh',
    width: '50%',
  },

  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },

  avatar: {
    cursor: "pointer"
  }
})
