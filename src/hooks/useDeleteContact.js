import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { errorToast, successToast } from 'utils/toasts';
import pagesPath from 'constants/pagesPath';

const useDeleteContact = () => {
  const id = useParams()[pagesPath.dynamicParam];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (contactId, path) => {
    dispatch(deleteContact(contactId))
      .unwrap()
      .then(() => {
        successToast('Contact successfully removed');
        if (path) {
          navigate(path);
        }
        if (id === contactId) {
          navigate(`/${pagesPath.contactsPath}`);
        }
      })
      .catch(() => {
        errorToast('Deleting a contact failed');
      });
  };
};

export default useDeleteContact;
