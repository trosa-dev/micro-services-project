import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { set_CreateUser_Email } from '../../../../createUserSlice'

export const EmailTextField = () => {
  const dispatch = useDispatch()

  const createUserState = useSelector((state: RootState) => state.createUser)
  const { email } = createUserState

  return (
    <>
      <TextField
        id='outlined-basic'
        label='Email'
        value={email}
        onChange={event => {
          dispatch(set_CreateUser_Email(event.target.value))
        }}
      />
    </>
  )
}
