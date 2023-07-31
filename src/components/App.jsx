import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import AboutPage from 'pages/AboutPage';
import ContactsPage from 'pages/ContactsPage';
import Contact from 'components/Contact';
import ContactDetails from 'components/ContactDetails';
import ContactDescription from 'components/ContactDescription';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />}>
            <Route path="contact-details/:id" element={<ContactDetails />}>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="about" element={<ContactDescription />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
