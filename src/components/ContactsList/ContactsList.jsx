import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import EmptyListMessage from 'components/EmptyListMessage';
import { Container, List } from './ContactsList.styled';
import sortContactsByName from 'utils/sortContactsByName';
import filterContactsByName from 'utils/filterContactsByName';
import { selectContacts } from 'redux/contacts/selectors';
import searchParamsKeys from 'constants/searchParamsKeys';

const { FILTER_SP_KEY, SORT_SP_KEY } = searchParamsKeys;

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
