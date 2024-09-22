import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  const api=import.meta.env.VITE_API;
  useEffect(() => {
    axios.get(`${api}/api/contacts`)
      .then(response => setContacts(response.data))
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contacts List</h2>
        <ul className="space-y-4">
          {contacts.map(contact => (
            <li key={contact.id} className="text-gray-700 text-lg">
              <Link to={`/contact/${contact.id}`} className="block hover:bg-gray-200 p-3 rounded-lg transition-all">
                {contact.firstName} {contact.lastName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Contacts;
