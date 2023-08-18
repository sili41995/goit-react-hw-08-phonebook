import { NavLink, useLocation } from 'react-router-dom';
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
import makeBlur from 'utils/makeBlur';
import {
  aboutPath,
  addNewContactPath,
  contactsPath,
  loginPath,
  registerPath,
} from 'constants/pathNames';

const Navigation = () => {
  const location = useLocation();

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
        <NavLink
          to={`${addNewContactPath}`}
          state={{ from: location }}
          onClick={makeBlur}
        >
          <IconContainer>
            <GrAddCircle />
          </IconContainer>
          New Contact
        </NavLink>
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
