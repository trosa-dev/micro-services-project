// ** Type import
import { HorizontalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): HorizontalNavItemsType => [
  {
    title: 'Home',
    path: '/',
    icon: 'bx:home-circle',
  },
  {
    title: 'Users',
    path: '/users',
    icon: 'bx:envelope',
    children: [{
      title: 'Create',
      path: '/users/create',
      icon: 'bx:envelope',
    },
    {
      title: 'Delete',
      path: '/users/delete',
      icon: 'bx:envelope',
    }]
  },
  {
    title: 'Second Page',
    path: '/second-page',
    icon: 'bx:envelope',
  },
  {
    path: '/acl',
    title: 'Access Control',
    icon: 'bx:shield',
  }
]

export default navigation
