import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import { List } from './ContactsList.styled';
import SEARCH_PARAMS_KEY from 'service/searh-params-key';
import contacts from 'service/contacts';

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
