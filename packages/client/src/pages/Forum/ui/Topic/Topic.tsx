import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '@/app/hooks/redux'
import { getSelectedForum } from '@/entities/forum/model/selectors'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import useStyles from './styles'
import { RoutePath } from '@/shared/config'
import { ListItem, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Field, Form } from 'react-final-form'
import DialogContent from '@mui/material/DialogContent'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import DialogActions from '@mui/material/DialogActions'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { useGate, useStore } from 'effector-react'
import { $forumMessages, ForumMessagesGate, onCreateMessage } from '@/pages/Forum/model'
import { authModel } from '@/entities/auth'

const Topic: React.FC = () => {
  const user = useAppSelector(authModel.selectors.getUserSelector)

  const fullName = useMemo(
    () => (user ? user.displayName : ''),
    [user]
  )
  const { id = null } = useParams()
  const styles = useStyles()
  useGate(ForumMessagesGate, id)
  const forumMessages = useStore($forumMessages)

  const onSubmit = (values: any) => {
    onCreateMessage({
      forumId: id,
      message: values.comment,
      user: fullName
    })
  }

  return (
    <Box sx={styles.root}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={RoutePath.forum}>
        Back
      </Button>

      <Paper sx={styles.paper}>
        <List>
          {forumMessages.length < 1 && "Сообщений нет"}
          {forumMessages?.map(message => (
            <React.Fragment key={message.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={message.user}
                  secondary={<React.Fragment>{message.message}</React.Fragment>}
                />
              </ListItem>
              <Divider component="li" />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      <Paper sx={styles.paper}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Typography variant={'body2'}>Your comment</Typography>
              <DialogContent>
                <Field
                  component={TextFieldForm}
                  margin="dense"
                  label="Comment"
                  name="comment"
                  fullWidth
                  multiline
                  maxRows={5}
                  minRows={3}
                />
              </DialogContent>
              <DialogActions>
                <Button type="submit" variant="contained" color="primary">
                  Sent
                </Button>
              </DialogActions>
            </form>
          )}
        />
      </Paper>
    </Box>
  )
}

export default Topic
