import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { set_CreatePayment_UserId } from '../../../../createPaymentSlice'

export const SelectUserIdField = () => {
  const dispatch = useDispatch()

  const createPaymentState = useSelector((state: RootState) => state.createPayment)
  const { usersList, userId } = createPaymentState

  return (
    <>
      <FormControl>
        <InputLabel id='demo-simple-select-outlined-label'>User</InputLabel>
        <Select
          value={userId}
          label='User'
          id='demo-simple-select-outlined'
          labelId='demo-simple-select-outlined-label'
          onChange={event => {
            dispatch(set_CreatePayment_UserId(event.target.value))
          }}
        >
          {usersList.map(user => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
