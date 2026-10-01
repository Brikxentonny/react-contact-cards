import React, { useState } from 'react';

function ContactForm({ onAddContact }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', role: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    onAddContact(formData);
    setFormData({ name: '', email: '', phone: '', role: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Add New Contact</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input type="text" name="role" placeholder="Role/Title" value={formData.role} onChange={handleChange} />
      <button type="submit">Add Contact</button>
    </form>
  );
}

function ContactCard({ contact }) {
  return (
    <div className="contact-card">
      <div className="card-avatar">{contact.name.charAt(0).toUpperCase()}</div>
      <div className="card-details">
        <h3>{contact.name}</h3>
        {contact.role && <p className="role">{contact.role}</p>}
        <p><strong>Email:</strong> {contact.email}</p>
        {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
      </div>
    </div>
  );
}

function UserList({ contacts }) {
  return (
    <div className="user-list-container">
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        <div className="card-grid">
          {contacts.map((contact, index) => (
            <ContactCard key={index} contact={contact} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [contacts, setContacts] = useState([
    { name: 'Brikxen Tonny', email: 'brikxen@example.com', phone: '123-456-7890', role: 'Frontend Developer' }
  ]);

  const handleAddContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };

  return (
    <div className="app-container">
      <h1>Contact Manager App</h1>
      <div className="main-content">
        <ContactForm onAddContact={handleAddContact} />
        <UserList contacts={contacts} />
      </div>
    </div>
  );
}