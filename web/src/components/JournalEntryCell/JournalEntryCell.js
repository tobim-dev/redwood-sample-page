import JournalEntry from 'src/components/JournalEntry'

export const QUERY = gql`
  query FIND_JOURNAL_ENTRY_BY_ID($id: Int!) {
    journalEntry: journalEntry(id: $id) {
      id
      createdAt
      updatedAt
      published
      title
      authorId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>JournalEntry not found</div>

export const Success = ({ journalEntry }) => {
  return <JournalEntry journalEntry={journalEntry} />
}
