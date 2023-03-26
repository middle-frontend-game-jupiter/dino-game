import React, { FC } from 'react'
import useStyles from './styles'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import { Container, Divider } from '@mui/material'
import { useAppSelector } from '@/app/hooks/redux'
import { getProfileSelector } from '@/entities/auth/model/selectors'
import { RoutePath } from '@/shared/config'
import { ChangePasswordModal } from '@/pages/Profile/ui/PasswordModal'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { useUpdateAvatarMutation } from '@/entities/user/api'

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
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)
  const styles = useStyles()
  const navigate = useNavigate()
  const { infoList, user } = useAppSelector(getProfileSelector)

  return (
    <Grid component={Container} container sx={styles.root}>
      <label htmlFor="avatar-input">
        <Avatar alt="avatar" src={user?.avatar} />
      </label>
      <Typography variant="body1">{user?.displayName}</Typography>
      {infoList?.map(item => (
        <Item key={item.label} label={item.label} value={item.value} />
      ))}
      <Grid sx={styles.buttonContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(RoutePath.settings)}>
          Change profile
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(true)}>
          Change password
        </Button>
      </Grid>
      <ChangePasswordModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Grid>
  )
}

export default Profile
