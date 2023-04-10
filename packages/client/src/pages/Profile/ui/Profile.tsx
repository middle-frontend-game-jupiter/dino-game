import React, { ChangeEvent, FC, useState } from 'react'
import useStyles from './styles'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import { useAppSelector } from '@/app/hooks/redux'
import { getProfileSelector } from '@/entities/auth/model/selectors'
import { RoutePath } from '@/shared/config'
import { ChangePasswordModal } from '@/pages/Profile/ui/PasswordModal'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router'
import { useUpdateAvatarMutation } from '@/services/user'
import { BASE_RESOURCES_URL } from '@/services/api'

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
  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const { infoList, user } = useAppSelector(getProfileSelector)

  const [updateAvatar] = useUpdateAvatarMutation()

  const handleAvatarChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (file) {
      const formData = new FormData()
      formData.append('avatar', file)
      await updateAvatar(formData).unwrap()
    }
  }

  return (
    <Grid component={Container} container sx={styles.root}>
      <input
        type="file"
        id="avatar-input"
        onChange={handleAvatarChange}
        hidden
      />
      <label htmlFor="avatar-input">
        <Avatar
          sx={styles.avatar}
          alt="avatar"
          src={`BASE_RESOURCES_URL/${user?.avatar}`}
        />
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
