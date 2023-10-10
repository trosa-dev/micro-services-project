import CreateUserView from 'src/views/pages/users/create'
import ListUsersView from 'src/views/pages/users/list'

const UsersPage = () => {
  return (
    <>
      <CreateUserView />
      <br />
      <ListUsersView />
    </>
  )
}

export default UsersPage
