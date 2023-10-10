import { TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { set_CreatePayment_Value } from '../../../../createPaymentSlice'

export const ValueField = () => {
  const dispatch = useDispatch()

  const createPaymentState = useSelector((state: RootState) => state.createPayment)

  const { value } = createPaymentState

  return (
    <>
      <TextField
        type='number'
        id='outlined-basic'
        label='Value'
        value={value}
        onChange={event => dispatch(set_CreatePayment_Value(event.target.value))}
      />
    </>
  )
}
