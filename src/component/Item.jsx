import './Item.css'

function ContactItem({ number, contact, onDeleteContact }) {
  const handleDelete = onDeleteContact.bind(null, contact.email)

  return (
    <li className="contact-item">
      <div className="contact-details">
        <p>
          <strong>{number}.</strong> {contact.name}
        </p>
        <p>{contact.email}</p>
      </div>

      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  )
}

export default ContactItem
