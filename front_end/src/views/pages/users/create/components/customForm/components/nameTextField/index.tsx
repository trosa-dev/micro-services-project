import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { set_CreateUser_Name } from '../../../../createUserSlice'

export const NameTextField = () => {
  const createUserState = useSelector((state: RootState) => state.createUser)
  const dispatch = useDispatch()

  const { name } = createUserState

  return (
    <>
      <TextField
        id='outlined-basic'
        label='Name'
        value={name}
        onChange={event => {
          dispatch(set_CreateUser_Name(event.target.value))
        }}
      />
    </>
  )
}
