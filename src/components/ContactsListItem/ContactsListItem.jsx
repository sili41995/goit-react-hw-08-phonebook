import { useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import { pagesPath, iconBtnType } from 'constants';
import { getContactInfo } from 'utils';
import { useDeleteContact } from 'hooks';
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
import { selectIsLoading } from 'redux/contacts/selectors';

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  const isLoading = useSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const path = `${pagesPath.contactDetailsPath}/${id}/${pagesPath.contactPath}`;

  return (
    <Item>
      <LinkWithQuery to={path}>
        <Image src={userAvatar} alt={name} />
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </Person>
          <Phone>{number}</Phone>
          <Email>{email}</Email>
        </ContactInfo>
      </LinkWithQuery>
      <IconButton
        top={0}
        right={0}
        position="absolute"
        disabled={isLoading}
        btnType={iconBtnType.deleteTransparent}
        width={44}
        height={35}
        onBtnClick={() => {
          deleteContact(id);
        }}
      >
        <AiOutlineDelete />
      </IconButton>
    </Item>
  );
};

export default ContactsListItem;
