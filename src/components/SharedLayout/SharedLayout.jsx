import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import isAuthPage from 'utils/isAuthPage';
import Navigation from 'components/Navigation';
import isContactsPage from 'utils/isContactsPage';

const SharedLayout = () => {
  const { pathname } = useLocation();

  document.body.style.backgroundColor = isAuthPage(pathname)
    ? 'rgba(46, 47, 66, 0.2)'
    : 'white';

  return (
    <>
      <Header>
        <Container>
          <Navigation />
        </Container>
      </Header>
      <Main>
        <Section>
          <Container isContactsPage={isContactsPage(pathname)}>
            <Outlet />
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
