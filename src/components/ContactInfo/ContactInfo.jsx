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
import useTargetContact from 'hooks/useTargetContact';
import getContactInfo from 'utils/getContactInfo';

const ContactInfo = () => {
  const targetContact = useTargetContact();
  if (!targetContact) {
    return;
  }
  const { name, role, avatar } = getContactInfo(targetContact);
  const userAvatar = getContactAvatar(avatar);

  return (
    <>
      <Image src={userAvatar} alt={`${name} photo`} />
      <ContactTitle>
        <ContactName>{name}</ContactName>
        <ContactDesc>{role}</ContactDesc>
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
