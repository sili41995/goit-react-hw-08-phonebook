import { Link } from 'react-router-dom';
import { Message } from './AuthFormMessage.styled';

export const AuthFormMessage = ({ message, pageLink, action }) => (
  <Message>
    <Link to={pageLink}>{action}</Link> {message}
  </Message>
);

export default AuthFormMessage;
