import React from 'react'
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

const commentList = [
  {
    id: 1,
    user: 'Nik',
    comment: 'Обсуждаем все что касается здоровья игроков',
  },
  {
    id: 2,
    user: 'Pik',
    comment: 'Мотоциклы и все такое',
  },
  {
    id: 3,
    user: 'Dik',
    comment: 'Обсуждаем айтишные мемы',
  },
  {
    id: 4,
    user: 'Kik',
    comment: 'Обсуждаем айтишные мемы',
  },
]

const Topic: React.FC = () => {
  const styles = useStyles()

  const { id } = useParams()

  if (!id) {
    return null
  }

  const forum = useAppSelector(state =>
    getSelectedForum(state, { forumId: Number(id) })
  )

  const onSubmit = (values: any) => {
    console.log(values)
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
        <Typography variant={'h4'}>{forum?.title}</Typography>
        <Typography marginTop={1}>{forum?.description}</Typography>
      </Paper>

      <Paper sx={styles.paper}>
        <List>
          {commentList.map(comment => (
            <React.Fragment key={comment.id}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={comment.user}
                  secondary={<React.Fragment>{comment.comment}</React.Fragment>}
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
