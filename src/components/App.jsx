import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import constants from 'constants';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';

const { pagesPath } = constants;

const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ContactData = lazy(() => import('components/ContactData'));
const AddContactForm = lazy(() => import('components/AddContactForm'));
const ContactDetails = lazy(() => import('components/ContactDetails'));
const ContactModalForm = lazy(() => import('components/ContactModalForm'));
const ContactDescription = lazy(() => import('components/ContactDescription'));
const PrivateRoute = lazy(() => import('components/PrivateRoute'));

const App = () => {
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
              path={`${pagesPath.contactDetailsPath}/:${pagesPath.dynamicParam}`}
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

export default App;
