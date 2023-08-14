import isAuthPage from 'utils/isAuthPage';

const setAuthPageBackgroundColor = (path) => {
  document.body.style.backgroundColor = isAuthPage(path)
    ? 'rgba(46, 47, 66, 0.2)'
    : 'white';
};

export default setAuthPageBackgroundColor;
