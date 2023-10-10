import CreatePaymentsView from 'src/views/pages/payments/create'
import ListPaymentsView from 'src/views/pages/payments/list'

const PaymentsPage = () => {
  return (
    <>
      <CreatePaymentsView />
      <br />
      <ListPaymentsView />
    </>
  )
}

export default PaymentsPage
