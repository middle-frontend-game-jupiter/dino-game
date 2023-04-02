import { Theme } from '@mui/material'
import { SxProps } from '@mui/system'
import { SIZE } from '@/app/styles/variables/global'
import { COLORS } from '@/app/styles/variables/colors'

export default (collapsed: boolean): Record<string, SxProps<Theme>> => ({
  root: {
    bgColor: COLORS.MAIN_BG_COLOR,
    width: collapsed
      ? `${SIZE.SIDE_BAR_WIDTH}px`
      : `${SIZE.SIDE_BAR_WIDTH_COLLAPSED}px`,
    borderRight: `1px solid ${COLORS.BORDER_COLOR}`,
    paddingY: 2,
    transition: 'width 0.3s',
    justifyContent: collapsed ? 'left' : 'center',
  },
  link: {
    display: collapsed ? 'block' : 'none',
  },
})
