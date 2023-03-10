import React, { FC, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Form } from 'react-final-form'
import { Button, Typography } from '@mui/material'
import { Field } from 'react-final-form'
import { SignupForm } from '@/shared/types/SignupForm'
import { RoutePath } from '@/shared/config/routeConfig/routeConfig'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import { useSignUpMutation } from '@/services/auth'
import { LoadingButton } from '@mui/lab'

const Signup: FC = () => {
  const styles = useStyles();

  const [signupQuery, { isLoading }] = useSignUpMutation();

  const onSubmit = useCallback(
    (formData: SignupForm) => signupQuery(formData), 
  [])

  return (
    <Form
      subscription={{ submitting: true }}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            <Grid container sx={styles.root}>
              <Field
                component={TextFieldForm}
                name='login'
                size='medium'
                label='Login'
              />
              <Field
                component={TextFieldForm}
                name='password'
                size='medium'
                label='Password'
              />
              <Field
                component={TextFieldForm}
                name='first_name'
                size='medium'
                label='First name'
              />
              <Field
                component={TextFieldForm}
                name='second_name'
                size='medium'
                label='Second name'
              />
              <Field
                component={TextFieldForm}
                name='email'
                size='medium'
                label='Email'
              />
              <Field
                component={TextFieldForm}
                name='phone'
                size='medium'
                label='Phone'
              />
              <LoadingButton 
                variant='contained' 
                disabled={submitting} 
                loading={isLoading}
                type='submit'
              >
                sign up
              </LoadingButton>

              <Grid container width='auto' alignItems='center' gap={1}>
                <Typography variant='body2'>Already have an account?</Typography>
                <AppLink to={RoutePath.auth}>Log in</AppLink>
              </Grid>
            </Grid>
          </form>
        )
      }}
    />

  )
}

export default Signup
