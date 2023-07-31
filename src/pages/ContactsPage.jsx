import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';

const ContactsPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <UserProfile />
      <ContactsList />
      <Outlet />
    </div>
  );
};

export default ContactsPage;
