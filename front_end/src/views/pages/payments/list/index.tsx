import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { internalAxiosInstance } from 'src/configs/internalAxiosInstance'
import { socketPensionSystem } from 'src/configs/socketPensionSystem'
import { Chip } from '@mui/material'

const ListPaymentsView = () => {
  const [paymentsState, setPaymentsState] = useState<
    { id: number; pension: string; userId: number; status: string; value: number; identifier: string }[]
  >([])

  async function updateList() {
    try {
      const { data: payments } = await internalAxiosInstance.get<typeof paymentsState>('payments/listAllPayments/')
      setPaymentsState(payments)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    socketPensionSystem.on('processed_payment_rejected', async () => {
      await updateList()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    socketPensionSystem.on('processed_payment_approved', async () => {
      await updateList()
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    ;(async () => {
      await updateList()
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Payment id</TableCell>
              <TableCell align='center'>User Id</TableCell>
              <TableCell align='center'>Status</TableCell>
              <TableCell align='center'>Pension</TableCell>
              <TableCell align='center'>Value</TableCell>
              <TableCell align='center'>Identifier</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paymentsState.map(payment => (
              <TableRow key={payment.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell scope='row'>{payment.id}</TableCell>
                <TableCell align='center'>{payment.userId}</TableCell>
                <TableCell align='center'>
                  {payment.status === 'approved' && <Chip label='SUCCESS' color='success' />}
                  {payment.status === 'new' && <Chip label='NEW' color='secondary' />}
                  {payment.status === 'rejected' && <Chip label='REJECTED' color='error' />}
                </TableCell>

                <TableCell align='center'>{payment.pension}</TableCell>
                <TableCell component='th' align='center'>
                  {payment.value}
                </TableCell>
                <TableCell align='center'>{payment.identifier}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ListPaymentsView
