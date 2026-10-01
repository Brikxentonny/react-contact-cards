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
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <h2>Add New Contact</h2>
      <div style={{ marginBottom: '10px' }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <input type="text" name="role" placeholder="Role/Title" value={formData.role} onChange={handleChange} />
      </div>
      <button type="submit">Add Contact</button>
    </form>
  );
}

function ContactCard({ contact }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h3>{contact.name}</h3>
      {contact.role && <p><em>{contact.role}</em></p>}
      <p><strong>Email:</strong> {contact.email}</p>
      {contact.phone && <p><strong>Phone:</strong> {contact.phone}</p>}
    </div>
  );
}

function UserList({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactCard key={index} contact={contact} />
        ))
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
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Contact Manager App</h1>
      <ContactForm onAddContact={handleAddContact} />
      <UserList contacts={contacts} />
    </div>
  );
}