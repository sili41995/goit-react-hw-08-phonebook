import contactsPath from 'constants/contactsPath';

const isContactsPage = (path) => path.includes(contactsPath);

export default isContactsPage;
