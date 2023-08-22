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
import Toast from './Toast/Toast';
import ContactDetails from 'components/ContactDetails';
import ContactDescription from 'components/ContactDescription';
import ContactModalForm from './ContactModalForm/ContactModalForm';
import useToken from 'hooks/useToken';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Loader from './Loader/Loader';
import pagesPath from 'constants/pagesPath';

export const App = () => {
  useToken();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path={pagesPath.homePath} element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={pagesPath.loginPath}
            element={<PublicRoute restricted element={<LoginPage />} />}
          />
          <Route
            path={pagesPath.registerPath}
            element={<PublicRoute restricted element={<RegisterPage />} />}
          />
          <Route
            path={pagesPath.aboutPath}
            element={<PublicRoute element={<AboutPage />} />}
          />
          <Route
            path={pagesPath.contactsPath}
            element={<PrivateRoute element={<ContactsPage />} />}
          >
            <Route
              path={`${pagesPath.contactDetailsPath}/:id`}
              element={<ContactDetails />}
            >
              <Route path={pagesPath.contactPath} element={<ContactData />} />
              <Route
                path={pagesPath.aboutPath}
                element={<ContactDescription />}
              />
            </Route>
            <Route
              path={pagesPath.newContactPath}
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
