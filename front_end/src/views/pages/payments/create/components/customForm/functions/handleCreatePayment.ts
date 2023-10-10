import toast from "react-hot-toast";
import { internalAxiosInstance } from "src/configs/internalAxiosInstance";
import { store } from "src/store";

export async function handleCreatePayment() {
  try {
    const state = store.getState()
    const createPaymentState = state.createPayment
    const { pension, userId, value } = createPaymentState

    await internalAxiosInstance.post('payments/create-payment/', { pension, userId, value })

    toast.success('New Payment Created!')
  }
  catch (error) {
    console.log(error)
  }
}
