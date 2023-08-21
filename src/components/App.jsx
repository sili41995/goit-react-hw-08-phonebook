import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import AboutPage from 'pages/AboutPage';
import ContactsPage from 'pages/ContactsPage';
import ContactData from 'components/ContactData';
import AddContactForm from 'components/AddContactForm';
import NotFoundPage from 'pages/NotFoundPage';
import GlobalStyles from 'components/GlobalStyles';
import {
  aboutPath,
  homePath,
  loginPath,
  registerPath,
} from 'constants/pathNames';
import Toast from './Toast/Toast';
import ContactDetails from 'components/ContactDetails';
import ContactDescription from 'components/ContactDescription';
import ContactModalForm from './ContactModalForm/ContactModalForm';
import useToken from 'hooks/useToken';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from './Loader/Loader';

export const App = () => {
  const token = useToken();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path={`${homePath}`} restricted element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={`${loginPath}`}
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={`${registerPath}`}
            element={<PublicRoute restricted element={<RegisterPage />} />}
          />
          <Route
            path={`${aboutPath}`}
            element={<PublicRoute element={<AboutPage />} />}
          />
          <Route
            path="contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          >
            <Route path="contact-details/:id" element={<ContactDetails />}>
              <Route path="contact" element={<ContactData />} />
              <Route path="about" element={<ContactDescription />} />
            </Route>
            <Route
              path="new-contact"
              element={<ContactModalForm children={<AddContactForm />} />}
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};
