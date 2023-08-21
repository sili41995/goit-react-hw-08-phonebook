import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import { aboutPath, contactsPath } from 'constants/pathNames';
import PrivateLinks from 'components/PrivateLinks/PrivateLinks';
import PublicLinks from 'components/PublicLinks/PublicLinks';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

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
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;
