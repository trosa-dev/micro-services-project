// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { Alert } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const HomeView = () => {
  const createUserState = useSelector((state: RootState) => state.main)

  const { pension_system, payment_gateway } = createUserState.connection

  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={6}>
          <Card>
            <CardHeader title='Pension System' />
            <CardContent>
              {pension_system ? (
                <Alert severity='success'>Service is up!</Alert>
              ) : (
                <>
                  <Alert severity='warning'>Service is loading!</Alert>
                  You might need to restart the application
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardHeader title='Payment Gateway' />
            <CardContent>
              {payment_gateway ? (
                <Alert severity='success'>Service is up!</Alert>
              ) : (
                <>
                  <Alert severity='warning'>Service is loading!</Alert>
                  You might need to restart the application
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
