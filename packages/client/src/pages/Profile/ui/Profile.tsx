import React, { FC } from 'react'
import useStyles from './styles'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Container, Divider } from '@mui/material'
import { useAppSelector } from '@/app/hooks/redux'
import { getProfileSelector } from '@/entities/auth/model/selectors'
import { RoutePath } from '@/shared/config'
import { AppLink } from '@/shared/ui/AppLink/AppLink'

interface IItem {
  label: string
  value: string
}

const Item: FC<IItem> = props => {
  const { label, value } = props

  return (
    <>
      <Grid container justifyContent="space-between">
        <Typography variant="body2">{label}</Typography>
        <Typography variant="body2">{value}</Typography>
      </Grid>
      <Divider style={{ width: '100%' }} />
    </>
  )
}

const Profile: FC = () => {
  const styles = useStyles()

  const { infoList, user } = useAppSelector(getProfileSelector)

  return (
    <Grid component={Container} container sx={styles.root}>
      <Avatar alt="avatar" src={user?.avatar} />
      <Typography variant="body1">{user?.displayName}</Typography>
      {infoList?.map(item => (
        <Item key={item.label} label={item.label} value={item.value} />
      ))}
      <AppLink to={RoutePath.settings}>Change profile</AppLink>
    </Grid>
  )
}

export default Profile
