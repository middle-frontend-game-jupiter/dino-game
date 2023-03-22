import React, { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { makeStyles } from '@mui/styles'
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from '@mui/material'

interface Message {
  id: number
  name: string
  message: string
}

const array: Message[] = [
  //Временная заглушка
  {
    id: 1,
    name: 'Игорь',
    message: 'Привет как дела?',
  },
  {
    id: 1,
    name: 'Вася',
    message: 'Норм',
  },
  {
    id: 1,
    name: 'Алекс',
    message: 'хорошо',
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
  buttonContainer: {
    display: 'flex',
    gap: '1rem',
  },
  messages: {
    marginTop: 20,
  },
  listItem: {
    border: '1px solid blue',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
}))

export const ForumMessages: React.FC = () => {
  const [navigateToHome, setNavigateToHome] = useState(false)
  const [navigateToForum, setNavigateToForum] = useState(false)

  const classes = useStyles()
  const { id } = useParams<{ id: string }>()
  const [message, setMessage] = useState('')

  const handleAddMessage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMessage('')
  }

  if (navigateToHome) return <Navigate to="/" replace={true} />
  if (navigateToForum) return <Navigate to="/forum" replace={true} />

  return (
    <div className={classes.root}>
      <div className={classes.head}>
        <Typography variant="h4" gutterBottom>
          Сообщения форума {id}
        </Typography>
        <div className={classes.buttonContainer}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setNavigateToForum(true)}>
            Назад
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setNavigateToHome(true)}>
            На главную
          </Button>
        </div>
      </div>
      <List className={classes.messages}>
        {array.map(message => (
          <ListItem className={classes.listItem} key={message.id}>
            <ListItemText primary={message.name} secondary={message.message} />
          </ListItem>
        ))}
      </List>
      <form className={classes.form} onSubmit={handleAddMessage}>
        <TextField
          className={classes.input}
          variant="outlined"
          label="Введите сообщение"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <Button type="submit" variant="contained" color="primary">
          Отправить
        </Button>
      </form>
    </div>
  )
}
