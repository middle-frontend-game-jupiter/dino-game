import { SxProps, Theme } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: 2,
    height: '100vh',
    flexWrap: "nowrap"
  }
});
