import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { internalAxiosInstance } from 'src/configs/internalAxiosInstance'

const ListUsersView = () => {
  const [usersState, setUserState] = useState<{ id: number; name: string; email: string }[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const { data: users } = await internalAxiosInstance.get<typeof usersState>('users/listAllUsers/')
        setUserState(users)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersState.map(user => (
              <TableRow key={user.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope='row'>{user.id}</TableCell>
                <TableCell component='th' align='right'>
                  {user.name}
                </TableCell>
                <TableCell align='right'>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ListUsersView
