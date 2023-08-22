import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import PrivateLinks from 'components/PrivateLinks';
import PublicLinks from 'components/PublicLinks';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import pagesPath from 'constants/pagesPath';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={`/${pagesPath.contactsPath}`}>Contacts</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={`/${pagesPath.aboutPath}`}>About</NavLink>
        </ListItem>
      </List>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;
