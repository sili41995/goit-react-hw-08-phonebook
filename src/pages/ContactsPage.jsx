import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';
import contacts from 'service/contacts';
import EmptyListMessage from 'components/EmptyListMessage';

const ContactsPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <UserProfile />
      {!!contacts.length ? <ContactsList /> : <EmptyListMessage />}
      <Outlet />
    </div>
  );
};

export default ContactsPage;
