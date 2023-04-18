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
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  messages: {
    marginTop: 20,
  },
  listItem: {
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
})
