import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import JournalEntryForm from 'src/components/JournalEntryForm'

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
const UPDATE_JOURNAL_ENTRY_MUTATION = gql`
  mutation UpdateJournalEntryMutation(
    $id: Int!
    $input: UpdateJournalEntryInput!
  ) {
    updateJournalEntry(id: $id, input: $input) {
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

export const Success = ({ journalEntry }) => {
  const { addMessage } = useFlash()
  const [updateJournalEntry, { loading, error }] = useMutation(
    UPDATE_JOURNAL_ENTRY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.journalEntries())
        addMessage('JournalEntry updated.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input, id) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    updateJournalEntry({ variables: { id, input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit JournalEntry {journalEntry.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <JournalEntryForm
          journalEntry={journalEntry}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
