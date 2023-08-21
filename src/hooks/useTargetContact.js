import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useParams } from 'react-router-dom';

const useTargetContact = () => {
  const { id } = useParams();
  const contacts = useSelector(selectContacts);
  if (contacts.length) {
    return contacts.find(({ id: contactId }) => contactId === id);
  }
};

export default useTargetContact;
