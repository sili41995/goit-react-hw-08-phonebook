import utils from 'utils';

const isAuthPage = (path) => {
  const authPages = utils.getAuthPages();

  return authPages.includes(path);
};

export default isAuthPage;
