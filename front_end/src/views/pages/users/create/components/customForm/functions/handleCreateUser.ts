import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { internalAxiosInstance } from "src/configs/internalAxiosInstance";
import { store } from "src/store";
import { set_CreateUser_Email, set_CreateUser_Name, set_CreateUser_UserList } from "../../../createUserSlice";

export async function handleCreateUser() {
  try {
    const state = store.getState()
    const createUserState = state.createUser
    const { name, email, usersList } = createUserState

    await internalAxiosInstance.post('users/create-user/', { name, email })

    toast.success('New user Created!')

    store.dispatch(set_CreateUser_Name(''))
    store.dispatch(set_CreateUser_Email(''))

    const { data: users } = await internalAxiosInstance.get<typeof usersList>('users/listAllUsers/')
    store.dispatch(set_CreateUser_UserList(users))
  }
  catch (error) {
    if (isAxiosError(error)) {
      switch (error.response?.data.message) {
        case 'There is already a registered user with this email':
          toast.error('There is already a registered user with this email!')
          break;
        default:
          console.log(error)
      }
    }
  }
}
