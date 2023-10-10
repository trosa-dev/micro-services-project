import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CreatePaymentState {
  value: string
  userId: string
  pension: string
  usersList: {
    id: number
    name: string
    email: string
  }[]
}

const initialState: CreatePaymentState = {
  value: '',
  userId: '',
  pension: '',
  usersList: []
}

export const createPaymentSlice = createSlice({
  name: 'create-payment',
  initialState,
  reducers: {
    set_CreatePayment_UserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
    set_CreatePayment_Pension: (state, action: PayloadAction<string>) => {
      state.pension = action.payload
    },
    set_CreatePayment_Value: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    set_UsersList: (state, action: PayloadAction<{
      id: number
      name: string
      email: string
    }[]>) => {
      state.usersList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_CreatePayment_UserId, set_CreatePayment_Pension, set_CreatePayment_Value, set_UsersList } = createPaymentSlice.actions

export const createPaymentReducer = createPaymentSlice.reducer
