import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CreateUserState {
  name: string
  email: string
  usersList: { id: number, name: string, email: string }[]
}

const initialState: CreateUserState = {
  name: '',
  email: '',
  usersList: []
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
    set_CreateUser_UserList: (state, action: PayloadAction<{ id: number, name: string, email: string }[]>) => {
      state.usersList = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { set_CreateUser_Name, set_CreateUser_Email, set_CreateUser_UserList } = createUserSlice.actions

export const createUserReducer = createUserSlice.reducer
