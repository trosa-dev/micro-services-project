import { Card, Grid, Typography } from '@mui/material'
import { CustomForm } from './components/customForm'

const CreateUserView = () => {
  return (
    <>
      <Grid container spacing={6} className='match-height'>
        <Grid item xs={12}>
          <Card className='p-6'>
            <Typography variant='h6' className='pb-3'>
              Create new user
            </Typography>
            <Typography variant='body1'>Use this form to create a new user.</Typography>
            <Typography variant='body2'>- For now, there is no email validation</Typography>
            <Typography variant='body2'>- Email field must be unique</Typography>
            <CustomForm />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default CreateUserView
