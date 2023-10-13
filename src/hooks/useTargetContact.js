import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pagesPath } from 'constants';
import { contactsSelectors } from 'redux/contacts';

const useTargetContact = () => {
  const id = useParams()[pagesPath.dynamicParam];
  const contacts = useSelector(contactsSelectors.selectContacts);
  if (contacts.length) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }
};

export default useTargetContact;
