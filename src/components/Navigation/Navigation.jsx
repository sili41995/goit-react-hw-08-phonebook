import { useLocation } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import {
  Container,
  LinkContainer,
  IconContainer,
  Link,
  AddContactLink,
} from './Navigation.styled';
import Filter from 'components/Filter';

const contactsPath = 'contacts';

const Navigation = () => {
  const location = useLocation();

  const isContactsPage = location.pathname.includes(contactsPath);

  return (
    <Container>
      <LinkContainer>
        <Link to={`/${contactsPath}`}>Contacts</Link>
        <Link to="/about">About</Link>
      </LinkContainer>
      <LinkContainer>
        {isContactsPage && <Filter />}
        <AddContactLink
          to="/contacts/new-contact"
          state={{ from: location }}
          onClick={(e) => e.currentTarget.blur()}
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
