import pagesPath from 'constants/pagesPath';
import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import getContactInfo from 'utils/getContactInfo';
import {
  Email,
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
} from './ContactsListItem.styled';

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);

  return (
    <Item>
      <LinkWithQuery
        to={`${pagesPath.contactDetailsPath}/${id}/${pagesPath.contactPath}`}
      >
        <Image src={userAvatar} alt={name} />
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </Person>
          <div>
            <Phone>{number}</Phone>
          </div>
          <div>
            <Email>{email}</Email>
          </div>
        </ContactInfo>
      </LinkWithQuery>
    </Item>
  );
};

export default ContactsListItem;
