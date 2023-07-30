import { Outlet, useLocation } from 'react-router-dom';
import { Container, Header, Main } from './SharedLayout.styled';
import Navigation from 'components/Navigation';

const authPge = ['/', '/register', '/login'];

const SharedLayout = () => {
  const { pathname } = useLocation();
  const isAuthPage = authPge.includes(pathname);

  document.body.style.backgroundColor = isAuthPage
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
        <Container>
          <Outlet />
        </Container>
      </Main>
    </>
  );
};
export default SharedLayout;
