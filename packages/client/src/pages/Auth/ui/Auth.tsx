import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import { Form } from 'react-final-form'
import { Button } from '@mui/material'
import { Field } from 'react-final-form'
import { TextFieldForm } from '@/app/hocs/form/hoc'

const Auth: FC = () => {
  const styles = useStyles()

  const onSubmit = async (form: any) => {
    console.log('form', form)
  }

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
              <Button variant='contained' disabled={submitting} type='submit'>
                Log in
              </Button>
            </Grid>
          </form>
        )
      }}
    />

  )
}

export default Auth
