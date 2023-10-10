import constants from 'constants';

const isAuthPage = (path) => constants.authPages.includes(path);

export default isAuthPage;
