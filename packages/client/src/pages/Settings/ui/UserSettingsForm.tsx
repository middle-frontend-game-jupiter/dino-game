import React, { FC } from "react"

import { UserEntity } from "@/shared/types/User"
import { Alert, AlertTitle, Grid, Box } from "@mui/material"
import { Form } from "react-final-form"
import { LoadingButton } from "@mui/lab"

import { FormFields } from "./FormFields"

import validate from "../lib/validate"

type UserSettingsFormProps = {
  user: Omit<UserEntity, 'avatar' | 'id'>;
  onChangeUser: (user: UserEntity) => void;
  isError?: boolean;
  isLoading: boolean;
  reason?: string | null;
}

export const UserSettingsForm: FC<UserSettingsFormProps> = ({ 
  user, 
  onChangeUser, 
  isLoading,
  isError,
  reason
}: UserSettingsFormProps) => (
  <Form 
    initialValues={user} 
    onSubmit={onChangeUser}
    validate={validate}
    initialValuesEqual={() => true}
    render={({ handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        <Grid width="500px">
          {
            isError && (
              <Box marginBottom='10px'>
                <Alert severity="error">
                  <AlertTitle>{reason}</AlertTitle>
                </Alert>
              </Box>
            )
          }
          <FormFields user={user} />

          <LoadingButton 
            type="submit"
            variant="contained"
            disabled={isLoading}
            fullWidth
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