import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { socketPaymentGateway } from 'src/configs/socketPaymentGateway'
import { socketPensionSystem } from 'src/configs/socketPensionSystem'
import { set_PaymentGateway_status, set_PensionSystem_Status } from 'src/store/mainSlice'

export const WebSocket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    socketPensionSystem.on('connect', () => {
      // A conexão WebSocket foi bem-sucedida
      toast.success('Pension System is online')
      dispatch(set_PensionSystem_Status(true))
    })

    socketPensionSystem.on('disconnect', () => {
      // A conexão WebSocket foi bem-sucedida
      dispatch(set_PensionSystem_Status(false))
    })

    socketPensionSystem.on('processed_payment_approved', () => {
      toast('A payment was approved', {
        icon: '💰'
      })
    })

    socketPensionSystem.on('processed_payment_rejected', () => {
      toast.error('A payment was rejected')
    })

    return () => {
      socketPensionSystem.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    socketPaymentGateway.on('connect', () => {
      // A conexão WebSocket foi bem-sucedida
      toast.success('Payment Gateway is online')
      dispatch(set_PaymentGateway_status(true))
    })

    socketPaymentGateway.on('disconnect', () => {
      // A conexão WebSocket foi bem-sucedida
      dispatch(set_PaymentGateway_status(false))
    })

    return () => {
      socketPaymentGateway.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <></>
}
