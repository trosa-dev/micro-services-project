import { useEffect } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { internalAxiosInstance } from 'src/configs/internalAxiosInstance'
import { RootState } from 'src/store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { set_CreateUser_UserList } from '../create/createUserSlice'

const ListUsersView = () => {
  const dispatch = useDispatch()

  const createUserState = useSelector((state: RootState) => state.createUser)
  const { usersList } = createUserState

  useEffect(() => {
    ;(async () => {
      try {
        const { data: users } = await internalAxiosInstance.get<typeof usersList>('users/listAllUsers/')
        dispatch(set_CreateUser_UserList(users))
      } catch (error) {
        console.log(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>id</TableCell>
              <TableCell align='center'>Name</TableCell>
              <TableCell align='center'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usersList.map(user => (
              <TableRow key={user.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope='row' align='center'>
                  {user.id}
                </TableCell>
                <TableCell component='th' align='center'>
                  {user.name}
                </TableCell>
                <TableCell align='center'>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ListUsersView
