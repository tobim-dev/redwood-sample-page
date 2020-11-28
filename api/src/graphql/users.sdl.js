export const schema = gql`
  type User {
    id: Int!
    createdAt: DateTime!
    email: String!
    name: String
    role: String!
    posts: [JournalEntry]!
  }

  type Query {
    users: [User!]!
    user(id: Int!): User
  }

  input CreateUserInput {
    email: String!
    name: String
    role: String!
  }

  input UpdateUserInput {
    email: String
    name: String
    role: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: Int!, input: UpdateUserInput!): User!
    deleteUser(id: Int!): User!
  }
`
