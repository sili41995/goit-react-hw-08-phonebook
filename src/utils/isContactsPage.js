import constants from 'constants';

const isContactsPage = (path) =>
  path.includes(constants.pagesPath.contactsPath);

export default isContactsPage;
