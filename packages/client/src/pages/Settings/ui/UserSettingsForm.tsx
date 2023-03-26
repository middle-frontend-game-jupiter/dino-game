import React from "react"

import { UserEntity } from "@/shared/types/User"
import { Grid } from "@mui/material"
import { Form } from "react-final-form"
import { LoadingButton } from "@mui/lab"

import { FormFields } from "./FormFields"

import validate from "../lib/validate"


export const UserSettingsForm =({ 
    user, onChangeUser, isLoading
  }: { 
    user: Omit<UserEntity, 'avatar' | 'id'> 
    onChangeUser: (user: UserEntity) => void
    isError?: boolean
    isLoading: boolean
  }) => {
    return (
      <Form 
        initialValues={user} 
        onSubmit={onChangeUser}
        validate={validate}
        initialValuesEqual={() => true}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Grid>
              <FormFields user={user} />
  
              <LoadingButton 
                type="submit"
                variant="contained"
                disabled={isLoading}
                loading={isLoading}
              >
                Change User
              </LoadingButton>
            </Grid>
          </form>
          )
        }
      />
    )
  }