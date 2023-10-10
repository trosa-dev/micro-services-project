import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CreateUserState {
  name: string
  email: string
}

const initialState: CreateUserState = {
  name: '',
  email: '',
}

export const createUserSlice = createSlice({
  name: 'create-user',
  initialState,
  reducers: {
    set_CreateUser_Name: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    set_CreateUser_Email: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_CreateUser_Name, set_CreateUser_Email } = createUserSlice.actions

export const createUserReducer = createUserSlice.reducer
