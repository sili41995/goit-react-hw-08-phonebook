import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pagesPath } from 'constants';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';

const PrivateRoute = ({ element }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
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
