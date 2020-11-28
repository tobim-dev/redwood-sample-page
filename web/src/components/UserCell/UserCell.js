import User from 'src/components/User'

export const QUERY = gql`
  query FIND_USER_BY_ID($id: Int!) {
    user: user(id: $id) {
      id
      createdAt
      email
      name
      role
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>User not found</div>

export const Success = ({ user }) => {
  return <User user={user} />
}
