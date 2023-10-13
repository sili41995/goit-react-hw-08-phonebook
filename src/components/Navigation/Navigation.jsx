import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './Navigation.styled';
import PrivateLinks from 'components/PrivateLinks';
import PublicLinks from 'components/PublicLinks';
import { pagesPath } from 'constants';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
import { authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const contactsPagePath = `/${pagesPath.contactsPath}`;
  const aboutPagePath = `/${pagesPath.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={contactsPagePath}>Contacts</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={aboutPagePath}>About</NavLink>
        </ListItem>
      </List>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default Navigation;
