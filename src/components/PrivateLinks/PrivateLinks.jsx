import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr';
import { logoutUser } from 'redux/auth/operations';
import IconButton from 'components/IconButton/IconButton';
import { SlLogout } from 'react-icons/sl';
import makeBlur from 'utils/makeBlur';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import Filter from 'components/Filter';
import isContactsPage from 'utils/isContactsPage';
import { selectContacts } from 'redux/contacts/selectors';
import { successToast } from 'utils/toasts';
import iconBtnType from 'constants/iconBtnType';
import pagesPath from 'constants/pagesPath';

const PrivateLinks = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const location = useLocation();

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        successToast('Goodbye!');
      });
  };

  return (
    <LinkContainer>
      {isContactsPage(location.pathname) && !!contacts.length && <Filter />}
      <Link to={`/${pagesPath.addNewContactPath}`} state={{ from: location }}>
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Contact
      </Link>
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
