import utils from 'utils';

const setAuthPageBackgroundColor = (path) => {
  const { isAuthPage } = utils;

  document.body.style.backgroundColor = isAuthPage(path)
    ? 'rgba(46, 47, 66, 0.2)'
    : 'white';
};

export default setAuthPageBackgroundColor;
