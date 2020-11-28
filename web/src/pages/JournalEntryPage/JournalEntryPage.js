import JournalEntriesLayout from 'src/layouts/JournalEntriesLayout'
import JournalEntryCell from 'src/components/JournalEntryCell'

const JournalEntryPage = ({ id }) => {
  return (
    <JournalEntriesLayout>
      <JournalEntryCell id={id} />
    </JournalEntriesLayout>
  )
}

export default JournalEntryPage
