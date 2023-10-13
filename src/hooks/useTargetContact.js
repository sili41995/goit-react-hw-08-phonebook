import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useParams } from 'react-router-dom';
import { pagesPath } from 'constants';

const useTargetContact = () => {
  const id = useParams()[pagesPath.dynamicParam];
  const contacts = useSelector(selectContacts);
  if (contacts.length) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }
};

export default useTargetContact;
