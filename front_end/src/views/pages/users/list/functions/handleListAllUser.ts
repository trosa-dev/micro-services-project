import { isAxiosError } from "axios";
import toast from "react-hot-toast";
import { internalAxiosInstance } from "src/configs/internalAxiosInstance";
import { store } from "src/store";

export async function handleListAllUsers() {
  try {
    const state = store.getState()
    const createUserState = state.createUser
    const { name, email } = createUserState

    await internalAxiosInstance.post('users/listAllUsers/', { name, email })

    toast.success('New user Created!')

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
