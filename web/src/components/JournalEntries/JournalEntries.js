import { useMutation, useFlash } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/JournalEntriesCell'

const DELETE_JOURNAL_ENTRY_MUTATION = gql`
  mutation DeleteJournalEntryMutation($id: Int!) {
    deleteJournalEntry(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const JournalEntriesList = ({ journalEntries }) => {
  const { addMessage } = useFlash()
  const [deleteJournalEntry] = useMutation(DELETE_JOURNAL_ENTRY_MUTATION, {
    onCompleted: () => {
      addMessage('JournalEntry deleted.', { classes: 'rw-flash-success' })
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete journalEntry ' + id + '?')) {
      deleteJournalEntry({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Created at</th>
            <th>Updated at</th>
            <th>Published</th>
            <th>Title</th>
            <th>Author id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {journalEntries.map((journalEntry) => (
            <tr key={journalEntry.id}>
              <td>{truncate(journalEntry.id)}</td>
              <td>{timeTag(journalEntry.createdAt)}</td>
              <td>{timeTag(journalEntry.updatedAt)}</td>
              <td>{checkboxInputTag(journalEntry.published)}</td>
              <td>{truncate(journalEntry.title)}</td>
              <td>{truncate(journalEntry.authorId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.journalEntry({ id: journalEntry.id })}
                    title={'Show journalEntry ' + journalEntry.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editJournalEntry({ id: journalEntry.id })}
                    title={'Edit journalEntry ' + journalEntry.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <a
                    href="#"
                    title={'Delete journalEntry ' + journalEntry.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(journalEntry.id)}
                  >
                    Delete
                  </a>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JournalEntriesList
