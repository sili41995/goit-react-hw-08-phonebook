import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import AboutPage from 'pages/AboutPage';
// import ContactsPage from 'pages/ContactsPage';
// import ContactData from 'components/ContactData';
// import AddContactForm from 'components/AddContactForm';
// import NotFoundPage from 'pages/NotFoundPage';
// import ContactModalForm from 'components/ContactModalForm';
import GlobalStyles from 'components/GlobalStyles';
import { aboutPath, homePath, registerPath } from 'constants/pathNames';
import Toast from './Toast/Toast';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path={`${homePath}`} element={<SharedLayout />}>
          <Route index element={<LoginPage />} />
          {/* <Route path="login" element={<LoginPage />} /> */}
          <Route path={`${registerPath}`} element={<RegisterPage />} />
          <Route path={`${aboutPath}`} element={<AboutPage />} />
          {/* <Route path="contacts" element={<ContactsPage />}> */}
          {/* <Route path="contact-details/:id" element={<ContactDetails />}> */}
          {/* <Route path="contact" element={<ContactData />}></Route> */}
          {/* <Route path="about" element={<ContactDescription />}></Route> */}
          {/* </Route> */}
          {/* <Route path="new-contact" element={<ContactModalForm children={<AddContactForm />} />}/> */}
          {/* </Route> */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};
