import React, { FC, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Form } from 'react-final-form'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'
import Typography from '@mui/material/Typography'
import { Field } from 'react-final-form'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import {
  REDIRECT_URI,
  useGetServiceIdMutation,
  useSignInMutation,
} from '@/services/auth'
import { LoadingButton } from '@mui/lab'
import { UserSignIn } from '@/shared/types/User'
import { useAppSelector } from '@/app/hooks/redux'
import validate from './validate'
import { Navigate } from 'react-router'
import Button from '@mui/material/Button'
import selector from './selector'

const Auth: FC = () => {
  const styles = useStyles()

  const { isAuth, errorReason } = useAppSelector(selector)

  const [authQuery, { isLoading, isError }] = useSignInMutation()

  const [getServiceId] = useGetServiceIdMutation()

  const onSubmit = useCallback((form: UserSignIn) => authQuery(form), [])

  if (isAuth) {
    return <Navigate to="/" replace={true} />
  }

  const handleLoginClick = async () => {
    try {
      const { service_id } = await getServiceId({}).unwrap()
      const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${service_id}&redirect_uri=${REDIRECT_URI}`
      document.location.href = url
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <Form
        subscription={{ submitting: true }}
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              {isError && errorReason && (
                <Alert severity="error">
                  <AlertTitle>{errorReason}</AlertTitle>
                </Alert>
              )}
              <Grid container sx={styles.root}>
                <Grid item width="180px">
                  <Field
                    component={TextFieldForm}
                    name="login"
                    size="medium"
                    label="Login"
                  />
                </Grid>
                <Grid item width="180px">
                  <Field
                    component={TextFieldForm}
                    disabled={submitting}
                    name="password"
                    size="medium"
                    label="Password"
                  />
                </Grid>
                <LoadingButton
                  variant="contained"
                  disabled={isLoading}
                  loading={isLoading}
                  type="submit">
                  Log in
                </LoadingButton>
                <Button onClick={handleLoginClick}>Log in with Yandex</Button>
                <Grid container width="auto" alignItems="center" gap={1}>
                  <Typography variant="body2">No account yet?</Typography>
                  <AppLink to={RoutePath.signup}>Signup</AppLink>
                </Grid>
              </Grid>
            </form>
          )
        }}
      />
    </Grid>
  )
}

export default Auth
