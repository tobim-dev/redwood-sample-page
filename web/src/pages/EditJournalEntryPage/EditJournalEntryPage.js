import JournalEntriesLayout from 'src/layouts/JournalEntriesLayout'
import EditJournalEntryCell from 'src/components/EditJournalEntryCell'

const EditJournalEntryPage = ({ id }) => {
  return (
    <JournalEntriesLayout>
      <EditJournalEntryCell id={id} />
    </JournalEntriesLayout>
  )
}

export default EditJournalEntryPage
