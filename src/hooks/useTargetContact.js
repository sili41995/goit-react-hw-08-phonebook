import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { pagesPath } from 'constants';
import { selectContacts } from 'redux/contacts/selectors';

const useTargetContact = () => {
  const id = useParams()[pagesPath.dynamicParam];
  const contacts = useSelector(selectContacts);
  if (contacts.length) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }
};

export default useTargetContact;
