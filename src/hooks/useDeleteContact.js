import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { errorToast, successToast } from 'utils/toasts';
import pagesPath from 'constants/pagesPath';
import { useEffect, useState } from 'react';

const useDeleteContact = (path) => {
  const [contactId, setContactId] = useState(null);
  const targetId = useParams()[pagesPath.dynamicParam];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (contactId) {
      const promise = dispatch(deleteContact(contactId));
      promise
        .unwrap()
        .then(() => {
          successToast('Contact successfully removed');
          if (path) {
            navigate(path);
          } else if (targetId === contactId) {
            navigate(`/${pagesPath.contactsPath}`);
          }
        })
        .catch((error) => {
          console.log(error);
          errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigate, path, targetId]);

  return setContactId;
};

export default useDeleteContact;
