import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useParams } from 'react-router-dom';

const useTargetContact = () => {
  const contacts = useSelector(selectContacts);
  const { id } = useParams();
  return contacts.find(({ id: contactId }) => contactId === id);
};

export default useTargetContact;
