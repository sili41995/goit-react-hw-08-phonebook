import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main, Section } from './SharedLayout.styled';
import Navigation from 'components/Navigation';
import Loader from 'components/Loader';
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </Main>
    </>
  );
};
export default SharedLayout;
