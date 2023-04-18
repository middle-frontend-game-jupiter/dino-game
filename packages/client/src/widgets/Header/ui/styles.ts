import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import { SIZE } from '@/app/styles/variables/global'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    height: `${SIZE.HEADER_HEIGHT}px`,
    width: '100%',
    borderBottom: '1px solid',
    padding: '8px 16px',
    zIndex: theme => theme.zIndex.appBar,
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
