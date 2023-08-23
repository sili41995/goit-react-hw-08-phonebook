import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pagesPath from 'constants/pagesPath';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { warnToast } from 'utils/toasts';

export const PublicRoute = ({ element, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = location.state?.from ?? `/${pagesPath.contactsPath}`;
  location.state && !isLoggedIn && warnToast('Please, authenticate in the app');

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
