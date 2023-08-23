import { useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import pagesPath from 'constants/pagesPath';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { warnToast } from 'utils/toasts';

export const PublicRoute = ({ element, restricted = false }) => {
  const isFirstRenderRef = useRef(true);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const goBackPath = location.state?.from ?? `/${pagesPath.contactsPath}`;
  const showWarnToast =
    location.state && !isLoggedIn && isFirstRenderRef.current;
  console.log(location.state);

  useEffect(() => {
    showWarnToast && warnToast('Please, authenticate in the app');
    isFirstRenderRef.current = false;
  }, [showWarnToast]);

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
