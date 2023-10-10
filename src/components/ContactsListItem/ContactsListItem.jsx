import { useSelector } from 'react-redux';
import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import constants from 'constants';
import utils from 'utils';
import hooks from 'hooks';
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

const { getContactInfo } = utils;
const { pagesPath, iconBtnType } = constants;
const { useDeleteContact } = hooks;

const ContactsListItem = ({ contact }) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  const isLoading = useSelector(selectIsLoading);
  const setContactId = useDeleteContact();

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
      <IconButton
        top={0}
        right={0}
        position="absolute"
        disabled={isLoading}
        btnType={iconBtnType.deleteTransparent}
        width={44}
        height={35}
        onBtnClick={() => {
          setContactId(id);
        }}
      >
        <AiOutlineDelete />
      </IconButton>
    </Item>
  );
};

export default ContactsListItem;
