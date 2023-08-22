import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';
import { fetchContacts } from 'redux/contacts/operations';
import Loader from 'components/Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <UserProfile />
      <ContactsList />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactsPage;
