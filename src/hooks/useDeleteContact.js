import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import utils from 'utils';
import constants from 'constants';

const { toasts } = utils;
const { pagesPath } = constants;

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
