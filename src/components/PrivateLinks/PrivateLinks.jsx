import { SlLogout } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr';
import IconButton from 'components/IconButton';
import Filter from 'components/Filter';
import LinkWithQuery from 'components/LinkWithQuery';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { makeBlur, toasts, isContactsPage } from 'utils';
import { pagesPath, iconBtnType } from 'constants';
import { contactsSelectors } from 'redux/contacts';
import { authOperations } from 'redux/auth';

const PrivateLinks = () => {
  const contacts = useSelector(contactsSelectors.selectContacts);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const path = `/${pagesPath.addNewContactPath}`;

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(authOperations.logoutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        navigate(pagesPath.homePath);
      });
  };

  return (
    <LinkContainer>
      {isContactsPage(location.pathname) && !!contacts.length && <Filter />}
      <LinkWithQuery to={path} state={{ from: location }}>
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
