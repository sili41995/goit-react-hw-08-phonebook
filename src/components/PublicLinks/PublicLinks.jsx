import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import { pagesPath } from 'constants';

const PublicLinks = () => {
  const registerPagePath = `/${pagesPath.registerPath}`;
  const loginPagePath = `/${pagesPath.loginPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={registerPagePath}>Sign up</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={loginPagePath}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
