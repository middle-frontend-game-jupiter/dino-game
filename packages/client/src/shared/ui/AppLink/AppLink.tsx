import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import useStyles from './styles'
import { useAppSelector } from '@/app/hooks/redux'
import { getTheme } from '@/entities/app/model/selectors'

type IProps = LinkProps

export const AppLink: FC<IProps> = props => {
  const { to, children, ...othersProps } = props

  const theme = useAppSelector(getTheme)

  const styles = useStyles(theme)

  return (
    <Link to={to} style={styles.root} {...othersProps}>
      {children}
    </Link>
  )
}
