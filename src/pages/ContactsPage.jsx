import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';
import Loader from 'components/Loader';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(contactsSelectors.selectIsLoaded);

  useEffect(() => {
    const promise = dispatch(contactsOperations.fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      <UserProfile />
      {isLoaded && <ContactsList />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactsPage;
