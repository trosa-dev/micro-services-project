// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      path: '/',
      icon: 'bx:home-circle',
    },
    {
      title: 'Users',
      path: '/users',
      icon: 'bx:user',
    },
    {
      title: 'Payments',
      path: '/payments',
      icon: 'bx:money',
    },
    {
      title: 'Queues',
      path: 'http://localhost:3003/queues',
      icon: 'heroicons:queue-list',
    },
    {
      title: 'Kafka',
      path: 'http://localhost:9021',
      icon: 'heroicons:queue-list',
    },
  ]
}

export default navigation
