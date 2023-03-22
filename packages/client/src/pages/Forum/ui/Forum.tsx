import React, { useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material'

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

const useStyles = makeStyles(() => ({
  root: {
    margin: '0 auto',
    padding: 20,
  },

  head: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  listItem: {
    border: '1px solid blue',
    marginBottom: '10px',
  },

  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
}))

export const ForumList: React.FC = () => {
  const classes = useStyles()

  const [navigateToHome, setNavigateToHome] = useState(false)
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const handleAddForum = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setOpen(false)
    setName('')
    setDescription('')
  }

  if (navigateToHome) return <Navigate to="/" replace={true} />

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant="h4" gutterBottom>
          Список тем форума
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}>
            Добавить форум
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setNavigateToHome(true)}>
            На главную
          </Button>
        </div>
      </div>
      <List>
        {array.map(topic => (
          <ListItem
            className={classes.listItem}
            key={topic.id}
            button
            component={Link}
            to={`/forumMessages/${topic.id}`}>
            <ListItemText primary={topic.title} secondary={topic.description} />
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleAddForum}>
          <DialogTitle>Добавление форума</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Название"
              value={name}
              onChange={event => setName(event.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              label="Описание"
              value={description}
              onChange={event => setDescription(event.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Отмена</Button>
            <Button type="submit" variant="contained" color="primary">
              Добавить
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  )
}
