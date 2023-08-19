import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';
import contacts from 'constants/contacts';
import EmptyListMessage from 'components/EmptyListMessage';

const ContactsPage = () => {
  return (
    <>
      <UserProfile />
      {!!contacts.length ? <ContactsList /> : <EmptyListMessage />}
      <Outlet />
    </>
  );
};

export default ContactsPage;
