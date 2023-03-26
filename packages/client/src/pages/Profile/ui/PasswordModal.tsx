import React, { useCallback } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { Form, Field } from 'react-final-form'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import { UserPasswordUpdate } from '@/shared/types/User'
import { useUpdatePasswordMutation } from '@/services/user'

interface IChangePasswordModal {
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ChangePasswordModal: React.FC<IChangePasswordModal> = ({
  isModalOpen,
  setIsModalOpen,
}) => {
  const [changePasswordQuery] = useUpdatePasswordMutation()

  const onSubmit = useCallback(
    (form: UserPasswordUpdate) => changePasswordQuery(form),
    []
  )

  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => {
          return (
            <form onSubmit={handleSubmit}>
              <DialogTitle>Change password</DialogTitle>
              <DialogContent>
                <Field
                  component={TextFieldForm}
                  margin="dense"
                  autoFocus
                  name="oldPassword"
                  size="medium"
                  label="Old password"
                  type="password"
                />
                <Field
                  component={TextFieldForm}
                  margin="dense"
                  disabled={submitting}
                  name="newPassword"
                  size="medium"
                  label="New password"
                  type="password"
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit" variant="contained" color="primary">
                  Change
                </Button>
              </DialogActions>
            </form>
          )
        }}
      />
    </Dialog>
  )
}
