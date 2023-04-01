import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import { SIZE } from '@/app/styles/variables/global'
import { COLORS } from '@/app/styles/variables/colors'

export default (): Record<string, SxProps<Theme>> => ({
  root: {
    height: `${SIZE.HEADER_HEIGHT}px`,
    width: '100%',
    borderBottom: '1px solid',
    borderColor: COLORS.BORDER_COLOR,
    padding: '8px 16px',
    zIndex: theme => theme.zIndex.appBar,
    background: COLORS.MAIN_BG_COLOR,
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})
