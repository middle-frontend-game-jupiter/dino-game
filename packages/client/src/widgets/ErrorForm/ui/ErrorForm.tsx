import { FC } from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useStyles from './styles'

export const ErrorForm: FC = () => {
  const styles = useStyles()

  const reloadPage = () => {
    location.reload()
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={styles.root}>
      <Typography variant="h5">Something went wrong</Typography>
      <Button variant="contained" onClick={reloadPage} size="large">
        update page
      </Button>
    </Grid>
  )
}
