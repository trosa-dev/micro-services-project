import { Button } from '@mui/material'
import { EmailTextField } from './components/emailTextField'
import { NameTextField } from './components/nameTextField'
import { handleCreateUser } from './functions/handleCreateUser'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'

export const CustomForm = () => {
  const createUserState = useSelector((state: RootState) => state.createUser)

  const { email, name } = createUserState

  return (
    <>
      <form className='demo-space-x' noValidate autoComplete='off'>
        <NameTextField />
        <EmailTextField />
      </form>
      <span className='w-full flex justify-end pt-4'>
        <Button
          variant='contained'
          disabled={(email === '' || name === '') ?? false}
          onClick={() => handleCreateUser()}
        >
          Create User
        </Button>
      </span>
    </>
  )
}
