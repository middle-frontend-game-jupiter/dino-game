import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    justifyContent: 'center',
    flexWrap: 'nowrap',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 2,
    width: '50%',
    marginTop: 10,
  },

  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },

  avatar: {
    cursor: 'pointer',
  },
})
