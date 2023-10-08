import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useTargetContact from 'hooks/useTargetContact';
import utils from 'utils';
import Loader from 'components/Loader';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  ListItem,
  List,
  Navigation,
} from './ContactInfo.styled';

const { getAvatar, getContactInfo } = utils;

const ContactInfo = () => {
  const targetContact = useTargetContact();

  const { name, role, avatar } = getContactInfo(targetContact);
  const userAvatar = getAvatar.getContactAvatar(avatar);

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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactInfo;
