import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import { List } from './ContactsList.styled';
import SEARCH_PARAMS_KEY from 'service/searh-params-key';
import contacts from 'service/contacts';
import sortContactsByName from 'utils/sortContactsByName';
import filterContactsByName from 'utils/filterContactsByName';

const ContactsList = ({ ascSort = true }) => {
  const [searchParams] = useSearchParams();

  const filter = searchParams.get(SEARCH_PARAMS_KEY) ?? '';
  const sortedContacts = sortContactsByName(contacts, ascSort);
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
