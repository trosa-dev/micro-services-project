import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { SelectUserIdField } from './components/selectUserIdField'
import { SelectPensionField } from './components/selectPensionField'
import { ValueField } from './components/valueField'
import { handleCreatePayment } from './functions/handleCreatePayment'

export const CustomForm = () => {
  const createUserState = useSelector((state: RootState) => state.createPayment)

  const { pension, userId, value } = createUserState

  return (
    <>
      <form className='demo-space-x' noValidate autoComplete='off'>
        <SelectUserIdField />
        <SelectPensionField />
        <ValueField />
      </form>
      <span className='w-full flex justify-end'>
        <Button
          variant='contained'
          disabled={(pension === '' || userId === '' || value === '') ?? false}
          onClick={() => handleCreatePayment()}
        >
          Create Payment
        </Button>
      </span>
    </>
  )
}
