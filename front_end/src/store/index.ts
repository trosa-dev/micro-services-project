import { configureStore } from '@reduxjs/toolkit'
import { createUserReducer } from 'src/views/pages/users/create/createUserSlice'
import { mainReducer } from './mainSlice'
import { createPaymentReducer } from 'src/views/pages/payments/create/createPaymentSlice'

export const store = configureStore({
  reducer: {
    main: mainReducer,
    createUser: createUserReducer,
    createPayment: createPaymentReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
