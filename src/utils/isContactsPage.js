import { contactsPath } from 'constants/pathNames';

const isContactsPage = (path) => path.includes(contactsPath);

export default isContactsPage;
