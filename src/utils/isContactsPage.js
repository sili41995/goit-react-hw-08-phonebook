import { pagesPath } from 'constants';

const isContactsPage = (path) => path.includes(pagesPath.contactsPath);

export default isContactsPage;
