import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toasts } from 'utils';
import { pagesPath } from 'constants';
import { deleteContact } from 'redux/contacts/operations';

const useDeleteContact = () => {
  const [contactId, setContactId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const path = `/${pagesPath.contactsPath + search}`;

  useEffect(() => {
    if (contactId) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          navigate(path);
          toasts.successToast('Contact successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigate, path]);

  return setContactId;
};

export default useDeleteContact;
