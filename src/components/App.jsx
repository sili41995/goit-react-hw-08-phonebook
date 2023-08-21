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
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const App = () => {
  const token = useToken();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (token && !isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [dispatch, isLoggedIn, token]);
  return (
    <>
      <Routes>
        <Route path={`${homePath}`} element={<SharedLayout />}>
          <Route index element={<LoginPage />} />
          <Route path={`${loginPath}`} element={<LoginPage />} />
          <Route path={`${registerPath}`} element={<RegisterPage />} />
          <Route path={`${aboutPath}`} element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />}>
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
