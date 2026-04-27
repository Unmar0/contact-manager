import { useState } from 'react'
import './Form.css'

function ContactForm({ onAddContact }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedName = name.trim()
    const trimmedEmail = email.trim()

    if (!trimmedName || !trimmedEmail) {
      return
    }

    onAddContact({ name: trimmedName, email: trimmedEmail })
    setName('')
    setEmail('')
  }

  return (
    <section className="contact-form-section">
      <h2>Add New Contact</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Add Contact</button>
      </form>
    </section>
  )
}

export default ContactForm
