import { useState } from 'react'
import ContactForm from './component/Form'
import ContactList from './component/List'
import './App.css'

function App() {
  const [contacts, setContacts] = useState([])

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact])
  }

  const deleteContact = (email) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.email !== email),
    )
  }

  return (
    <main className="app">
      <h1>Contact Manager App</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
    </main>
  )
}

export default App
