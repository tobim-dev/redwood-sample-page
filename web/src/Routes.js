// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/users/new" page={NewUserPage} name="newUser" />
      <Route path="/users/{id:Int}/edit" page={EditUserPage} name="editUser" />
      <Route path="/users/{id:Int}" page={UserPage} name="user" />
      <Route path="/users" page={UsersPage} name="users" />
      <Route path="/journal-entries/new" page={NewJournalEntryPage} name="newJournalEntry" />
      <Route path="/journal-entries/{id:Int}/edit" page={EditJournalEntryPage} name="editJournalEntry" />
      <Route path="/journal-entries/{id:Int}" page={JournalEntryPage} name="journalEntry" />
      <Route path="/journal-entries" page={JournalEntriesPage} name="journalEntries" />
      <Route path="/contact" page={ContactPage} name="contact" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
