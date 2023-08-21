import React from 'react';
import { List, ListItem } from './PublicLinks.styled';
import { NavLink } from 'react-router-dom';
import { loginPath, registerPath } from 'constants/pathNames';

const PublicLinks = () => {
  return (
    <List>
      <ListItem>
        <NavLink to={`/${registerPath}`}>Sign up</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/${loginPath}`}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
