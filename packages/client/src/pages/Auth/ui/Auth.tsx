import React, { FC, useCallback } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Form } from 'react-final-form'
import { Alert, AlertTitle, Typography } from '@mui/material'
import { Field } from 'react-final-form'
import { AppLink } from '@/shared/ui/AppLink/AppLink'
import { RoutePath } from '@/shared/config'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import { useSignInMutation } from '@/services/auth'
import { LoadingButton } from '@mui/lab'
import { UserSignIn } from '@/shared/types/User'
import { useAppSelector } from '@/app/hooks/redux'
import { authModel } from '@/entities/auth'

const Auth: FC = () => {
  const styles = useStyles()
  const errorReason = useAppSelector(
    authModel.selectors.authErrorReasonSelector
  )
  const [authQuery, { isLoading, isError }] = useSignInMutation()

  const onSubmit = useCallback((form: UserSignIn) => authQuery(form), [])

  return (
    <Form
      subscription={{ submitting: true }}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => {
        return (
          <form onSubmit={handleSubmit}>
            {isError && errorReason && (
              <Alert severity="error">
                <AlertTitle>{errorReason}</AlertTitle>
              </Alert>
            )}
            <Grid container sx={styles.root}>
              <Field
                component={TextFieldForm}
                name="login"
                size="medium"
                label="Login"
              />
              <Field
                component={TextFieldForm}
                disabled={submitting}
                name="password"
                size="medium"
                label="Password"
              />
              <LoadingButton
                variant="contained"
                disabled={isLoading}
                loading={isLoading}
                type="submit">
                Log in
              </LoadingButton>
              <Grid container width="auto" alignItems="center" gap={1}>
                <Typography variant="body2">No account yet?</Typography>
                <AppLink to={RoutePath.signup}>Settings</AppLink>
              </Grid>
            </Grid>
          </form>
        )
      }}
    />
  )
}

export default Auth
