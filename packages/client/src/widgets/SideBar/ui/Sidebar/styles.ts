import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import { SIZE } from '@/app/styles/variables/global'

export default (collapsed: boolean): Record<string, SxProps<Theme>> => ({
  root: {
    width: collapsed
      ? `${SIZE.SIDE_BAR_WIDTH}px`
      : `${SIZE.SIDE_BAR_WIDTH_COLLAPSED}px`,
    borderRight: `1px solid`,
    paddingY: 2,
    transition: 'width 0.3s',
    justifyContent: collapsed ? 'left' : 'center',
  },
  link: {
    display: collapsed ? 'block' : 'none',
  },
})
