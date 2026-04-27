import ContactItem from './Item'
import './List.css'

function ContactList({ contacts, onDeleteContact }) {
  return (
    <section className="contact-list-section">
      <h2>Contact List</h2>

      {contacts.length === 0 ? (
        <p className="empty-message">No contacts available.</p>
      ) : (
        <ul className="contact-list">
          {contacts.map((contact, index) => (
            <ContactItem
              key={`${contact.email}-${index}`}
              number={index + 1}
              contact={contact}
              onDeleteContact={onDeleteContact}
            />
          ))}
        </ul>
      )}
    </section>
  )
}

export default ContactList
