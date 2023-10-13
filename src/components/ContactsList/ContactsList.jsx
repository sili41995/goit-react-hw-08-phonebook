import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import EmptyListMessage from 'components/EmptyListMessage';
import { Container, List } from './ContactsList.styled';
import { searchParamsKeys } from 'constants';
import { filterContactsByName, sortContactsByName } from 'utils';
import { contactsSelectors } from 'redux/contacts';

const ContactsList = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(searchParamsKeys.FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(searchParamsKeys.SORT_SP_KEY) ?? '';
  const filteredContacts = useMemo(() => {
    const sortedContacts = sortContactsByName(contacts, sortType);
    return filterContactsByName(sortedContacts, filter);
  }, [contacts, filter, sortType]);

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
