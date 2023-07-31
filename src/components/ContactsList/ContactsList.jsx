import ContactsListItem from 'components/ContactsListItem';
import { List } from './ContactsList.styled';
import SEARCH_PARAMS_KEY from 'service/searh-params-key';
import { useSearchParams } from 'react-router-dom';

const contacts = [
  { id: '1', name: 'Rocket', number: '0123456789' },
  { id: '2', name: 'Groot', number: '0123456789' },
  { id: '3', name: 'StarLord', number: '0123456789' },
  { id: '4', name: 'Tony', number: '0123456789' },
  { id: '5', name: 'Hulk', number: '0123456789' },
  { id: '6', name: 'Nick', number: '0123456789' },
  { id: '7', name: 'Natasha', number: '0123456789' },
  { id: '9', name: 'Gamora', number: '0123456789' },
  { id: '10', name: 'StepanBandera', number: '0123456789' },
];

const ContactsList = ({ ascSort = true }) => {
  const [searchParams] = useSearchParams();

  const filter = searchParams.get(SEARCH_PARAMS_KEY) ?? '';
  const sortContactsByName = (contacts, ascSort) =>
    [...contacts].sort(({ name: prevContact }, { name: nextContact }) =>
      ascSort
        ? prevContact.localeCompare(nextContact)
        : nextContact.localeCompare(prevContact)
    );

  const sortedContacts = sortContactsByName(contacts, ascSort);

  const filterContactsByName = (contacts, filter) =>
    filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

  const filteredContacts = filterContactsByName(sortedContacts, filter);

  return (
    <List>
      {filteredContacts.map((contact) => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </List>
  );
};

export default ContactsList;
