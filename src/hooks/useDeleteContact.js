import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import utils from 'utils';
import constants from 'constants';
import { useEffect, useState } from 'react';

const { toasts } = utils;
const { pagesPath } = constants;

const useDeleteContact = () => {
  const [contactId, setContactId] = useState(null);
  const currentId = useParams()[pagesPath.dynamicParam];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const path = `/${pagesPath.contactsPath + search}`;

  useEffect(() => {
    if (contactId) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          toasts.successToast('Contact successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigate, path, currentId]);

  return setContactId;
};

export default useDeleteContact;
