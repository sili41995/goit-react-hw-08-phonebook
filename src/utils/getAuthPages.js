import { pagesPath } from 'constants';

const getAuthPages = () => {
  const { homePath, registerPath, loginPath } = pagesPath;

  return [homePath, `/${registerPath}`, `/${loginPath}`];
};

export default getAuthPages;
