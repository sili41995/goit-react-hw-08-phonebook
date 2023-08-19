import { getContactAvatar } from 'utils/getAvatar';
import {
  Email,
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
  ContactLink,
} from './ContactsListItem.styled';
import { contactDetailsPath } from 'constants/pathNames';

const ContactsListItem = ({ contact }) => {
  const { id, name, number, avatar, role = 'my friend' } = contact;
  const userAvatar = getContactAvatar(avatar);

  return (
    <Item>
      <ContactLink to={`${contactDetailsPath}/${id}/contact`}>
        <Image src={userAvatar} alt={name} />
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </Person>
          <Phone>{number}</Phone>
          <Email>sili41995@gmail.com</Email>
        </ContactInfo>
      </ContactLink>
    </Item>
  );
};

export default ContactsListItem;
