import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pagesPath from 'constants/pagesPath';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicRoute = ({ element, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  const location = useLocation();
  const goBackPath = location.state?.from ?? `/${pagesPath.contactsPath}`;
  console.log(location.state.message);

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
