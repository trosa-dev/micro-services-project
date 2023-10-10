import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { set_CreatePayment_Pension } from '../../../../createPaymentSlice'

export const SelectPensionField = () => {
  const dispatch = useDispatch()

  const createPaymentState = useSelector((state: RootState) => state.createPayment)
  const { pension } = createPaymentState

  const pensions = ['Futuro Light', 'Futuro Saúde', 'Futuro Família', 'Futuro Família Premium']

  return (
    <>
      <FormControl>
        <InputLabel id='demo-simple-select-outlined-label'>Pension</InputLabel>
        <Select
          value={pension}
          label='Pension'
          id='demo-simple-select-outlined'
          labelId='demo-simple-select-outlined-label'
          onChange={event => {
            dispatch(set_CreatePayment_Pension(event.target.value))
          }}
        >
          {pensions.map((pension, pensionIndex) => (
            <MenuItem key={pensionIndex} value={pension}>
              {pension}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}
