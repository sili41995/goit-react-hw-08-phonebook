import { Outlet, useLocation } from 'react-router-dom';
import { Header, Main } from './SharedLayout.styled';
import Navigation from 'components/Navigation';

const SharedLayout = () => {
  const { pathname } = useLocation();
  const isAuthPage =
    pathname.includes('login' || 'register') || pathname === '/';

  document.body.style.backgroundColor = isAuthPage
    ? 'rgba(46, 47, 66, 0.2)'
    : 'white';

  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
export default SharedLayout;
