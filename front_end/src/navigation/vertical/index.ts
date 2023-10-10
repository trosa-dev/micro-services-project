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
  ]
}

export default navigation
