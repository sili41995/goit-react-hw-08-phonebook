import constants from 'constants';

const getAuthPages = () => {
  const {
    pagesPath: { homePath, registerPath, loginPath },
  } = constants;

  return [homePath, `/${registerPath}`, `/${loginPath}`];
};

export default getAuthPages;
