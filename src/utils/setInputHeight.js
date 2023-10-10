import constants from 'constants';

const setInputHeight = (inputType) => {
  const { formType } = constants;

  switch (inputType) {
    case formType.filter:
      return false;

    case formType.authForm:
      return '60px';

    default:
      return '50px';
  }
};

export default setInputHeight;
