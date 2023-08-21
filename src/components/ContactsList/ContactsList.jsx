import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import { Container, List } from './ContactsList.styled';
import { FILTER_SP_KEY, SORT_SP_KEY } from 'constants/searchParamsKey';
import sortContactsByName from 'utils/sortContactsByName';
import filterContactsByName from 'utils/filterContactsByName';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import EmptyListMessage from 'components/EmptyListMessage';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';
  const sortedContacts = sortContactsByName(contacts, sortType);
  const filteredContacts = filterContactsByName(sortedContacts, filter);

  return (
    <Container>
      {!!contacts.length ? (
        <List>
          {filteredContacts.map((contact) => (
            <ContactsListItem contact={contact} key={contact.id} />
          ))}
        </List>
      ) : (
        <EmptyListMessage />
      )}
    </Container>
  );
};

export default ContactsList;
