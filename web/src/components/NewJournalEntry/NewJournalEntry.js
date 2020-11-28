import { useMutation, useFlash } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import JournalEntryForm from 'src/components/JournalEntryForm'

import { QUERY } from 'src/components/JournalEntriesCell'

const CREATE_JOURNAL_ENTRY_MUTATION = gql`
  mutation CreateJournalEntryMutation($input: CreateJournalEntryInput!) {
    createJournalEntry(input: $input) {
      id
    }
  }
`

const NewJournalEntry = () => {
  const { addMessage } = useFlash()
  const [createJournalEntry, { loading, error }] = useMutation(
    CREATE_JOURNAL_ENTRY_MUTATION,
    {
      onCompleted: () => {
        navigate(routes.journalEntries())
        addMessage('JournalEntry created.', { classes: 'rw-flash-success' })
      },
    }
  )

  const onSave = (input) => {
    const castInput = Object.assign(input, {
      authorId: parseInt(input.authorId),
    })
    createJournalEntry({ variables: { input: castInput } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New JournalEntry</h2>
      </header>
      <div className="rw-segment-main">
        <JournalEntryForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewJournalEntry
