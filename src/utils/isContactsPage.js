import pagesPath from 'constants/pagesPath';

const isContactsPage = (path) => path.includes(pagesPath.contactsPath);

export default isContactsPage;
