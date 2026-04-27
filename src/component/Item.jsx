import './Item.css'

function ContactItem({ number, contact, onDeleteContact }) {
  return (
    <li className="contact-item">
      <div className="contact-details">
        <p>
          <strong>{number}.</strong> {contact.name}
        </p>
        <p>{contact.email}</p>
      </div>

      <button type="button" onClick={() => onDeleteContact(contact.email)}>
        Delete
      </button>
    </li>
  )
}

export default ContactItem
