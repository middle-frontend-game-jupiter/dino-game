import useStyles from './styles'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import { useAppSelector } from '@/app/hooks/redux'
import Box from '@mui/material/Box'
import { COLUMNS } from '@/pages/Leaderboard/ui/consts'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import isEqual from 'lodash/isEqual'
import React, { memo } from 'react'
import { getLeaderboardSelector } from '@/entities/leaderboard/model/selectors'
import { ILeaderBoardListResponse } from '@/shared/types/LiderBoard'

interface IRowProps {
  row?: ILeaderBoardListResponse
}

const Row: React.FC<IRowProps> = memo(props => {
  const { row } = props

  return (
    <TableRow>
      <TableCell>
        <Typography variant="body1">{row?.data.user}</Typography>
      </TableCell>

      <TableCell>
        <Typography variant="body1">{row?.data.dino_score}</Typography>
      </TableCell>
    </TableRow>
  )
}, isEqual)

const Leaderboard: React.FC = () => {
  const styles = useStyles()

  const { leaderboardList } = useAppSelector(getLeaderboardSelector)

  return (
    <Box marginTop={6} flex={1}>
      <Container>
        <Table stickyHeader>
          <colgroup>
            {COLUMNS.map(column => (
              <col key={column.title} width={column.width} />
            ))}
          </colgroup>
          <TableHead>
            <TableRow>
              {COLUMNS.map(column => (
                <TableCell key={column.title} sx={styles.stickyHeader}>
                  {column.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {leaderboardList?.map((row, idx) => (
              <Row key={idx} row={row} />
            ))}
            <Row />
          </TableBody>
        </Table>
      </Container>
    </Box>
  )
}

export default Leaderboard
