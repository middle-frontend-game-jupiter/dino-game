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
import { IForumForm } from '@/pages/Forum/ui/Forum/types'
import { useAppSelector } from '@/app/hooks/redux'
import { getForumList } from '@/entities/forum/model/selectors'

const Forum: React.FC = () => {
  const styles = useStyles()

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false)

  const forumList = useAppSelector(getForumList)

  const handleAddForum = (values: IForumForm) => {
    setIsModalOpen(!isModalOpen)
  }

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Box sx={styles.root}>
      <Grid container alignItems={'center'} justifyContent={'space-between'}>
        <Typography variant="h4">Forum</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={styles.button}
          onClick={handleCloseModal}>
          Create forum
        </Button>
      </Grid>

      <List component={Grid} container>
        {forumList?.map(item => (
          <ListItem
            key={item.id}
            button
            component={Link}
            to={`${RoutePath.forum}/${item.id}`}>
            <ListItemText primary={item.title} secondary={item.description} />
          </ListItem>
        ))}
      </List>
      <Dialog open={isModalOpen} onClose={handleCloseModal}>
        <Form
          onSubmit={handleAddForum}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <DialogTitle>Add new forum</DialogTitle>
              <DialogContent>
                <Field
                  component={TextFieldForm}
                  size={'small'}
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
                  multiline
                  maxRows={5}
                  minRows={3}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseModal}>Cancel</Button>
                <Button type="submit" variant="contained" color="primary">
                  Add
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
