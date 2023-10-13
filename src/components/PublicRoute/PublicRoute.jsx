import { useEffect, useRef } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { pagesPath } from 'constants';
import { toasts } from 'utils';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicRoute = ({ element, restricted = false }) => {
  const isFirstRenderRef = useRef(true);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const defaultGoBackPath = `/${pagesPath.contactsPath}`;
  const goBackPath = location.state?.from ?? defaultGoBackPath;
  const isShowWarnToast =
    location.state && !isLoggedIn && isFirstRenderRef.current;

  useEffect(() => {
    isShowWarnToast && toasts.warnToast('Please, authenticate in the app');
    isFirstRenderRef.current = false;
  }, [isShowWarnToast]);

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
