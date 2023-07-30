import ContactsListItem from 'components/ContactsListItem';
import { List } from './ContactsList.styled';

const contacts = [
  { id: '1', name: 'Rocket', number: '0123456789' },
  { id: '2', name: 'Groot', number: '0123456789' },
  { id: '3', name: 'StarLord', number: '0123456789' },
];

const ContactsList = () => {
  return (
    <List>
      {contacts.map((contact) => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};

export default ContactsList;
