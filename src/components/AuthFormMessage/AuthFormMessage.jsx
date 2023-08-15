import React from 'react';
import { Message, SignUpLink } from './AuthFormMessage.styled';

export const AuthFormMessage = ({ message, pageLink, action }) => {
  return (
    <Message>
      <SignUpLink to={pageLink}>{action}</SignUpLink> {message}
    </Message>
  );
};

export default AuthFormMessage;
