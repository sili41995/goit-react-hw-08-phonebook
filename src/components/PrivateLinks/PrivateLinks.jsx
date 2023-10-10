import { SlLogout } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr';
import { selectContacts } from 'redux/contacts/selectors';
import { logoutUser } from 'redux/auth/operations';
import IconButton from 'components/IconButton';
import Filter from 'components/Filter';
import LinkWithQuery from 'components/LinkWithQuery';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import utils from 'utils';
import constants from 'constants';

const { pagesPath, iconBtnType } = constants;
const { makeBlur, toasts, isContactsPage } = utils;

const PrivateLinks = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        navigate(pagesPath.homePath);
      });
  };

  return (
    <LinkContainer>
      {isContactsPage(location.pathname) && !!contacts.length && <Filter />}
      <LinkWithQuery
        to={`/${pagesPath.addNewContactPath}`}
        state={{ from: location }}
      >
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Contact
      </LinkWithQuery>
      <IconButton
        btnType={iconBtnType.logout}
        iconSize={28}
        width={44}
        onBtnClick={onLogoutBtnClick}
      >
        <IconContainer>
          <SlLogout />
        </IconContainer>
        Logout
      </IconButton>
    </LinkContainer>
  );
};

export default PrivateLinks;
