import defaultAvatar from '../default-contact-avatar.jpg';
import {
  Email,
  Image,
  Item,
  JobTitle,
  Name,
  Phone,
  ContactInfo,
  Person,
  ContactLink,
} from './ContactsListItem.styled';

const ContactsListItem = ({ contact }) => {
  const { id, name, number, avatar, jobTitle = 'my friend' } = contact;
  const userAvatar = avatar ? avatar : defaultAvatar;

  return (
    <Item>
      <ContactLink to={`contact-details/${id}/contact`}>
        <Image src={userAvatar} alt={name} />
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            <JobTitle>{jobTitle}</JobTitle>
          </Person>
          <Phone>{number}</Phone>
          <Email>sili41995@gmail.com</Email>
        </ContactInfo>
      </ContactLink>
    </Item>
  );
};

export default ContactsListItem;
