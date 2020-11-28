export const schema = gql`
  type JournalEntry {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    published: Boolean!
    title: String!
    author: User
    authorId: Int
  }

  type Query {
    journalEntries: [JournalEntry!]!
    journalEntry(id: Int!): JournalEntry
  }

  input CreateJournalEntryInput {
    published: Boolean!
    title: String!
    authorId: Int
  }

  input UpdateJournalEntryInput {
    published: Boolean
    title: String
    authorId: Int
  }

  type Mutation {
    createJournalEntry(input: CreateJournalEntryInput!): JournalEntry!
    updateJournalEntry(id: Int!, input: UpdateJournalEntryInput!): JournalEntry!
    deleteJournalEntry(id: Int!): JournalEntry!
  }
`
