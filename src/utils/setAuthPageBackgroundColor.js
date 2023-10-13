import { theme } from 'constants';
import { isAuthPage } from 'utils';

const setAuthPageBackgroundColor = (path) => {
  document.body.style.backgroundColor = isAuthPage(path)
    ? theme.colors.authPageBackgroundColor
    : theme.colors.whiteColor;
};

export default setAuthPageBackgroundColor;
