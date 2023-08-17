import { Outlet } from 'react-router-dom';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  Link,
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
        <ContactDesc>Best friend</ContactDesc>
      </ContactTitle>
      <Navigation>
        <Link to="contact">Contact</Link>
        <Link to="about">About</Link>
      </Navigation>
      <Outlet />
    </>
  );
};

export default ContactInfo;
