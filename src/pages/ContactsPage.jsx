import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';

const ContactsPage = () => {
  return (
    <>
      <UserProfile />
      <ContactsList />
      <Outlet />
    </>
  );
};

export default ContactsPage;
