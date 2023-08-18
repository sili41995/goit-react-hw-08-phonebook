import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Navigation from 'components/Navigation';
// import isContactsPage from 'utils/isContactsPage';
import setAuthPageBackgroundColor from 'utils/setAuthPageBackgroundColor';
import isContactsPage from 'utils/isContactsPage';

const SharedLayout = () => {
  const { pathname } = useLocation();

  setAuthPageBackgroundColor(pathname);

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
