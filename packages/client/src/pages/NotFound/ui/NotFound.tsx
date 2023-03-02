import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from "./styles"
import { Typography } from '@mui/material'

const NotFound: FC = () => {
  const styles = useStyles()

  return (
    <Grid container sx={styles.root}>
      <Typography variant="h4">
        Not Found
      </Typography>
    </Grid>
  )
}

export default NotFound
