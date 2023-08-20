import { NavLink, Outlet } from 'react-router-dom';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  ListItem,
  List,
  Navigation,
} from './ContactInfo.styled';
import { getContactAvatar } from 'utils/getAvatar';

const ContactInfo = ({ avatar }) => {
  // потом avatar удалить
  const userAvatar = getContactAvatar(avatar);

  return (
    <>
      <Image src={userAvatar} alt="" />
      <ContactTitle>
        <ContactName>Maria Onichan</ContactName>
        <ContactDesc>my friend</ContactDesc>
      </ContactTitle>
      <Navigation>
        <List>
          <ListItem>
            <NavLink to="contact">Contact</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="about">About</NavLink>
          </ListItem>
        </List>
      </Navigation>
      <Outlet />
    </>
  );
};

export default ContactInfo;
