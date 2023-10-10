import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import constants from 'constants';

const { pagesPath } = constants;

const PublicLinks = () => (
  <List>
    <ListItem>
      <NavLink to={`/${pagesPath.registerPath}`}>Sign up</NavLink>
    </ListItem>
    <ListItem>
      <NavLink to={`/${pagesPath.loginPath}`}>Log in</NavLink>
    </ListItem>
  </List>
);

export default PublicLinks;
