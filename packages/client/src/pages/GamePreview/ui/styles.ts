import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'

export default (): Record<string, SxProps<Theme>> => ({
  content: {
    flexGrow: 1,
    padding: 3,
  },
})
