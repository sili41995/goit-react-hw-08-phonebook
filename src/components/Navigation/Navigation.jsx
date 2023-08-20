import { Link, NavLink, useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import {
  NavContainer,
  LinkContainer,
  IconContainer,
  List,
  ListItem,
} from './Navigation.styled';
import Filter from 'components/Filter';
import isContactsPage from 'utils/isContactsPage';
import {
  aboutPath,
  addNewContactPath,
  contactsPath,
  loginPath,
  registerPath,
} from 'constants/pathNames';
import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/operations';
import IconButton from 'components/IconButton/IconButton';
import { SlLogout } from 'react-icons/sl';
import makeBlur from 'utils/makeBlur';

const Navigation = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const onLogoutBtnClick = ({ currentTarget }) => {
    makeBlur(currentTarget);
    dispatch(logoutUser());
  };

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={`/${contactsPath}`}>Contacts</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={`/${aboutPath}`}>About</NavLink>
        </ListItem>
      </List>
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
          <SlLogout />
        </IconButton>
      </LinkContainer>
      <List>
        <ListItem>
          <NavLink to={`/${registerPath}`}>Sign up</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={`/${loginPath}`}>Log in</NavLink>
        </ListItem>
      </List>
    </NavContainer>
  );
};

export default Navigation;
