import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MainState {
  connection: {
    pension_system: boolean
    payment_gateway: boolean
  }
}

const initialState: MainState = {
  connection: {
    pension_system: false,
    payment_gateway: false
  }
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    set_PensionSystem_Status: (state, action: PayloadAction<boolean>) => {
      state.connection.pension_system = action.payload
    },
    set_PaymentGateway_status: (state, action: PayloadAction<boolean>) => {
      state.connection.payment_gateway = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_PensionSystem_Status, set_PaymentGateway_status } = mainSlice.actions

export const mainReducer = mainSlice.reducer
