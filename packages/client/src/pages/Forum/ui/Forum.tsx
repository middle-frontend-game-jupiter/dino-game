import React from 'react'
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Grid from '@mui/material/Grid'
import { Form, Field } from 'react-final-form'
import { RoutePath } from '@/shared/config'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import useStyles from './styles'
import Box from '@mui/material/Box'

interface Topic {
  id: number
  title: string
  description: string
}

const array: Topic[] = [
  //Временная заглушка
  {
    id: 1,
    title: 'Форум о здоровье',
    description: 'Обсуждаем все что касается здоровья игроков',
  },
  {
    id: 2,
    title: 'Форум о мотоциклах',
    description: 'Мотоциклы и все такое',
  },
  {
    id: 3,
    title: 'Форум о программировании',
    description: 'Обсуждаем айтишные мемы',
  },
]

const Forum: React.FC = () => {
  const styles = useStyles()

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  const handleAddForum = (values: any) => {
    console.log('Submitted values:', values)
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Box sx={styles.root}>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant="h4">Forum topics list</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={styles.button}
          onClick={handleAddForum}>
          Create forum
        </Button>
      </Grid>

      <List component={Grid} container>
        {array.map(topic => (
          <ListItem
            key={topic.id}
            button
            component={Link}
            to={`${RoutePath.forum_messages}/${topic.id}`}>
            <ListItemText primary={topic.title} secondary={topic.description} />
          </ListItem>
        ))}
      </List>
      <Dialog open={isModalOpen} onClose={handleAddForum}>
        <Form
          onSubmit={handleAddForum}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle>Add new forum</DialogTitle>
              <DialogContent>
                <Field
                  component={TextFieldForm}
                  autoFocus
                  margin="dense"
                  label="Forum Name"
                  name="title"
                  fullWidth
                />
                <Field
                  component={TextFieldForm}
                  margin="dense"
                  label="Forum description"
                  name="description"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={() => setIsModalOpen(false)}>Отмена</Button>
                <Button type="submit" variant="contained" color="primary">
                  Добавить
                </Button>
              </DialogActions>
            </form>
          )}
        />
      </Dialog>
    </Box>
  )
}

export default Forum
