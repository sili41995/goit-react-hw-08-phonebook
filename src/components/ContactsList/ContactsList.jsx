import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import EmptyListMessage from 'components/EmptyListMessage';
import { Container, List } from './ContactsList.styled';
import utils from 'utils';
import { selectContacts } from 'redux/contacts/selectors';
import constants from 'constants';
import { useMemo } from 'react';

const { searchParamsKeys } = constants;
const { filterContactsByName, sortContactsByName } = utils;

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
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
