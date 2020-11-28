import { Link, routes } from '@redwoodjs/router'

import JournalEntries from 'src/components/JournalEntries'

export const QUERY = gql`
  query JOURNAL_ENTRIES {
    journalEntries {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No journalEntries yet. '}
      <Link to={routes.newJournalEntry()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ journalEntries }) => {
  return <JournalEntries journalEntries={journalEntries} />
}
