import React from 'react';
import { List, ListItem } from './PublicLinks.styled';
import { NavLink } from 'react-router-dom';
import pagesPath from 'constants/pagesPath';

const PublicLinks = () => {
  return (
    <List>
      <ListItem>
        <NavLink to={`/${pagesPath.registerPath}`}>Sign up</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={`/${pagesPath.loginPath}`}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
