document.addEventListener('DOMContentLoaded', () => {
  const contacts = [
    { name: 'Brikxen Tonny', email: 'brikxen@example.com', phone: '123-456-7890', role: 'Frontend Developer' }
  ];

  const form = document.getElementById('contact-form');
  const userListContainer = document.getElementById('user-list');

  function renderContacts() {
    userListContainer.innerHTML = '';
    
    if (contacts.length === 0) {
      userListContainer.innerHTML = '<p>No contacts added yet.</p>';
      return;
    }

    contacts.forEach((contact) => {
      const card = document.createElement('div');
      card.className = 'contact-card';
      card.innerHTML = `
        <div class="card-avatar">${contact.name.charAt(0).toUpperCase()}</div>
        <div class="card-details">
          <h3>${contact.name}</h3>
          ${contact.role ? `<p class="role">${contact.role}</p>` : ''}
          <p><strong>Email:</strong> ${contact.email}</p>
          ${contact.phone ? `<p><strong>Phone:</strong> ${contact.phone}</p>` : ''}
        </div>
      `;
      userListContainer.appendChild(card);
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const role = document.getElementById('role').value;

      contacts.push({ name, email, phone, role });
      form.reset();
      renderContacts();
    });
  }

  renderContacts();
});