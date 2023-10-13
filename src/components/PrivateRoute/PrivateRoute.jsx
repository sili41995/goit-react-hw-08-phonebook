import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pagesPath } from 'constants';
import { authSelectors } from 'redux/auth';

const PrivateRoute = ({ element }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const path = `/${pagesPath.loginPath}`;

  return shouldRedirect ? (
    <Navigate to={path} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
