import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    margin: '0 auto',
    padding: 20,
  },

  head: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  listItem: {
    border: '1px solid blue',
    marginBottom: '10px',
  },

  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
})
