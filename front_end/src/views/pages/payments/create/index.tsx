import { Alert, Button, Card, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import Link from 'next/link'
import { useEffect } from 'react'
import { internalAxiosInstance } from 'src/configs/internalAxiosInstance'
import { useDispatch } from 'react-redux'
import { set_UsersList } from './createPaymentSlice'
import { CustomForm } from './components/customForm'

const CreatePaymentsView = () => {
  const dispatch = useDispatch()
  const createUserState = useSelector((state: RootState) => state.createPayment)
  const { usersList } = createUserState

  useEffect(() => {
    try {
      ;(async () => {
        const { data: users } = await internalAxiosInstance.get<typeof usersList>('users/listAllUsers/')
        dispatch(set_UsersList(users))
      })()
    } catch (error) {
      console.log(error)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {usersList.length !== 0 ? (
        <Grid container spacing={6} className='match-height'>
          <Grid item xs={12}>
            <Card className='p-6'>
              <Typography variant='h6' className='pb-3'>
                Create new payment
              </Typography>
              <Typography variant='body1'>Use this form to create a new user.</Typography>
              <Typography variant='body2'>- For now, there is no email validation</Typography>
              <Typography variant='body2'>- Email field must be unique</Typography>
              <CustomForm />
            </Card>
          </Grid>
        </Grid>
      ) : (
        <>
          <Alert severity='warning'>You must register at least one user</Alert>
          <span className='flex pt-4'>
            <Link href='/users/create'>
              <Button variant='contained' onClick={() => null}>
                Click here to create a user
              </Button>
            </Link>
          </span>
        </>
      )}
    </>
  )
}

export default CreatePaymentsView
