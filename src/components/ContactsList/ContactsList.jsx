import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import { List } from './ContactsList.styled';
import { FILTER_SP_KEY, SORT_SP_KEY } from 'constants/searchParamsKey';
import contacts from 'constants/contacts';
import sortContactsByName from 'utils/sortContactsByName';
import filterContactsByName from 'utils/filterContactsByName';

const ContactsList = () => {
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';
  const sortedContacts = sortContactsByName(contacts, sortType);
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
