import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes, navigate } from '@redwoodjs/router'

import { QUERY } from 'src/components/JournalEntriesCell'

const DELETE_JOURNAL_ENTRY_MUTATION = gql`
  mutation DeleteJournalEntryMutation($id: Int!) {
    deleteJournalEntry(id: $id) {
      id
    }
  }
`

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    <time dateTime={datetime} title={datetime}>
      {new Date(datetime).toUTCString()}
    </time>
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const JournalEntry = ({ journalEntry }) => {
  const { addMessage } = useFlash()
  const [deleteJournalEntry] = useMutation(DELETE_JOURNAL_ENTRY_MUTATION, {
    onCompleted: () => {
      navigate(routes.journalEntries())
      addMessage('JournalEntry deleted.', { classes: 'rw-flash-success' })
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete journalEntry ' + id + '?')) {
      deleteJournalEntry({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            JournalEntry {journalEntry.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{journalEntry.id}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(journalEntry.createdAt)}</td>
            </tr>
            <tr>
              <th>Updated at</th>
              <td>{timeTag(journalEntry.updatedAt)}</td>
            </tr>
            <tr>
              <th>Published</th>
              <td>{checkboxInputTag(journalEntry.published)}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{journalEntry.title}</td>
            </tr>
            <tr>
              <th>Author id</th>
              <td>{journalEntry.authorId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editJournalEntry({ id: journalEntry.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <a
          href="#"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(journalEntry.id)}
        >
          Delete
        </a>
      </nav>
    </>
  )
}

export default JournalEntry
