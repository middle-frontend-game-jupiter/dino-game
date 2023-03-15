import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Form } from 'react-final-form'
import { Button, Typography } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Field } from 'react-final-form'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import { ProfileForm } from '@/shared/types/profileForm'

const initialValues = {
  first_name: `Константин`,
  second_name: `Константинопольский`,
  email: `kk@gmail.ru`,
  phone: `+1 996 120 345 11`,
}

const ProfileEdit: FC = () => {
  const styles = useStyles()

  const onSubmit = async (form: ProfileForm) => {
    console.log('form', form)
  }

  return (
    <Form
      subscription={{ submitting: true }}
      onSubmit={onSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container sx={styles.root}>
              <Typography variant="h3" gutterBottom>
                Profile
              </Typography>
              <Field
                component={TextFieldForm}
                name="first_name"
                size="medium"
                label="First name"
              />
              <Field
                component={TextFieldForm}
                name="second_name"
                size="medium"
                label="Second name"
              />
              <Field
                component={TextFieldForm}
                name="email"
                size="medium"
                label="Email"
              />
              <Field
                component={TextFieldForm}
                name="phone"
                size="medium"
                label="Phone"
              />
              <LoadingButton
                variant="contained"
                disabled={submitting}
                type="submit">
                Save
              </LoadingButton>
              <Button href={RoutePath.profile}>Cancel</Button>
            </Grid>
          </form>
        )
      }}
    />
  )
}

export default ProfileEdit
