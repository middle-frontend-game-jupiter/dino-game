import { FC } from 'react'
import Grid from '@mui/material/Grid'
import useStyles from './styles'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Button } from '@mui/material'
import { RoutePath } from '@/shared/config'

const initialValues = {
  first_name: `Константин`,
  second_name: `Константинопольский`,
  email: `kk@gmail.ru`,
  phone: `+1 996 120 345 11`,
}

type TKey = keyof typeof initialValues

const Profile: FC = () => {
  const styles = useStyles()

  return (
    <Grid container sx={styles.root}>
      <Typography variant="h3" gutterBottom>
        Profile
      </Typography>
      <TableContainer
        component={Paper}
        sx={{ maxWidth: 650, marginLeft: 'auto', marginRight: 'auto' }}>
        <Table aria-label="Profile table">
          <TableBody>
            {Object.keys(initialValues).map(it => (
              <TableRow
                key={it}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell>{it}</TableCell>
                <TableCell align="right">{initialValues[it as TKey]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" href={RoutePath.profile_edit} type="submit">
        Edit
      </Button>
    </Grid>
  )
}

export default Profile
