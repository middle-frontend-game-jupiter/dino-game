import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import { ProfileForm } from '@/shared/types/profileForm'

const initialValues = {
  first_name: `Константин`,
  second_name: `Константинопольский`,
  email: `kk@gmail.ru`,
  phone: `+1 996 120 345 11`,
}

const Profile: FC = () => {
  const styles = useStyles()

  return (
    <Grid container sx={styles.root}>
      <Typography variant="h3" gutterBottom>
        Profile
      </Typography>
      <Box sx={{ border: '1px solid grey' }}>
        <List>
          {Object.keys(initialValues).map(it => (
            <ListItem>
              <ListItemText>
                {it}: {initialValues[it as keyof typeof initialValues]}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Grid>
  )
}

export default Profile
