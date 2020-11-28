import { db } from 'src/lib/db'

// super hacky workaround function by @rob 🚀
const foreignKeyReplacement = (input) => {
  let output = input
  const foreignKeys = Object.keys(input).filter((k) => k.match(/Id$/))
  foreignKeys.forEach((key) => {
    const modelName = key.replace(/Id$/, '')
    const value = input[key]
    delete output[key]
    output = Object.assign(output, {
      [modelName]: { connect: { id: value } },
    })
  })
  return output
}

export const journalEntries = () => {
  return db.journalEntry.findMany()
}

export const journalEntry = ({ id }) => {
  return db.journalEntry.findOne({
    where: { id },
  })
}

export const createJournalEntry = ({ input }) => {
  return db.journalEntry.create({
    data: foreignKeyReplacement(input),
  })
}

export const updateJournalEntry = ({ id, input }) => {
  return db.journalEntry.update({
    data: foreignKeyReplacement(input),
    where: { id },
  })
}

export const deleteJournalEntry = ({ id }) => {
  return db.journalEntry.delete({
    where: { id },
  })
}

export const JournalEntry = {
  author: (_obj, { root }) =>
    db.journalEntry.findOne({ where: { id: root.id } }).author(),
}
