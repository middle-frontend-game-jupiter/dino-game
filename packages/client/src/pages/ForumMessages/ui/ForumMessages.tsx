import React from 'react'
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { Form, Field } from 'react-final-form'
import { TextFieldForm } from '@/shared/hocs/formHocs'
import useStyles from './styles'

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
    id: 2,
    name: 'Вася',
    message: 'Норм',
  },
  {
    id: 3,
    name: 'Алекс',
    message: 'хорошо',
  },
]

type AddMessageFormValues = {
  message: string
}

export const ForumMessages: React.FC = () => {
  const styles = useStyles()
  const { id } = useParams<{ id: string }>()

  const handleAddMessage = (values: AddMessageFormValues) => {
    console.log(values.message)
  }

  return (
    <Grid sx={styles.root}>
      <Grid sx={styles.head}>
        <Typography variant="h4" gutterBottom>
          Сообщения форума {id}
        </Typography>
      </Grid>
      <List sx={styles.messages}>
        {array.map(message => (
          <ListItem sx={styles.listItem} key={message.id}>
            <ListItemText primary={message.name} secondary={message.message} />
          </ListItem>
        ))}
      </List>
      <Form onSubmit={handleAddMessage} initialValues={{ message: '' }}>
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Field name="message">
              {({ input }) => (
                <Field
                  component={TextFieldForm}
                  sx={styles.input}
                  variant="outlined"
                  label="Write a message"
                  {...input}
                />
              )}
            </Field>
            <Button type="submit" variant="contained" color="primary">
              Отправить
            </Button>
          </form>
        )}
      </Form>
    </Grid>
  )
}
