import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { GrAddCircle } from 'react-icons/gr';
import { logoutUser } from 'redux/auth/operations';
import IconButton from 'components/IconButton/IconButton';
import { SlLogout } from 'react-icons/sl';
import makeBlur from 'utils/makeBlur';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import Filter from 'components/Filter';
import isContactsPage from 'utils/isContactsPage';
import { addNewContactPath } from 'constants/pathNames';

const PrivateLinks = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(logoutUser());
  };

  return (
    <LinkContainer>
      {isContactsPage(location.pathname) && <Filter />}
      <Link to={`/${addNewContactPath}`} state={{ from: location }}>
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Contact
      </Link>
      <IconButton
        type="logout"
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
