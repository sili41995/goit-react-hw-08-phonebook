import { useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import {
  Container,
  LinkContainer,
  IconContainer,
  Link,
  AddContactLink,
} from './Navigation.styled';
// import Filter from 'components/Filter';
import contactsPath from 'constants/contactsPath';
import isContactsPage from 'utils/isContactsPage';
import makeBlur from 'utils/makeBlur';

const Navigation = () => {
  const location = useLocation();

  return (
    <Container>
      <LinkContainer>
        <Link to={`/${contactsPath}`}>Contacts</Link>
        <Link to="/about">About</Link>
      </LinkContainer>
      <LinkContainer>
        {/* {isContactsPage(location.pathname) && <Filter />} */}
        <AddContactLink
          to="/contacts/new-contact"
          state={{ from: location }}
          onClick={makeBlur}
        >
          <IconContainer>
            <GrAddCircle />
          </IconContainer>
          New Contact
        </AddContactLink>
      </LinkContainer>
      <LinkContainer>
        <Link to="/register">Sign up</Link>
        <Link to="/login">Log in</Link>
      </LinkContainer>
    </Container>
  );
};

export default Navigation;
