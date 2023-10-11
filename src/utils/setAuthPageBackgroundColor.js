import constants from 'constants';
import utils from 'utils';

const setAuthPageBackgroundColor = (path) => {
  const { isAuthPage } = utils;
  const { theme } = constants;

  document.body.style.backgroundColor = isAuthPage(path)
    ? theme.colors.authPageBackgroundColor
    : 'white';
};

export default setAuthPageBackgroundColor;
