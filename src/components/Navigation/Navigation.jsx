import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import PrivateLinks from 'components/PrivateLinks';
import PublicLinks from 'components/PublicLinks';
import constants from 'constants';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const { pagesPath } = constants;

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
