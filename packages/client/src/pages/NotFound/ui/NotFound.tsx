import React, { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from "./styles"

const NotFound: FC = () => {
  const styles = useStyles()

  return (
    <Grid container sx={styles.root}>
      Not Found
    </Grid>
  )
}

export default NotFound
