import React from 'react';
import { Message } from './AuthFormMessage.styled';
import { Link } from 'react-router-dom';

export const AuthFormMessage = ({ message, pageLink, action }) => {
  return (
    <Message>
      <Link to={pageLink}>{action}</Link> {message}
    </Message>
  );
};

export default AuthFormMessage;
