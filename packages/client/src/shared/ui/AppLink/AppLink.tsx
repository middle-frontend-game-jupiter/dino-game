import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import useStyles from './styles'

type IProps = LinkProps

export const AppLink: FC<IProps> = props => {
  const { to, children, ...othersProps } = props

  const styles = useStyles()

  return (
    <Link to={to} style={styles.root} {...othersProps}>
      {children}
    </Link>
  )
}
