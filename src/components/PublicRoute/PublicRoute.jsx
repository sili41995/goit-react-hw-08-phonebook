import pagesPath from 'constants/pagesPath';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const PublicRoute = ({ element, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  const location = useLocation();
  const goBackPath = location.state?.from ?? `/${pagesPath.contactsPath}`;

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
