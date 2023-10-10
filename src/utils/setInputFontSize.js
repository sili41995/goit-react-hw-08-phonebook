import constants from 'constants';

const setInputFontSize = (inputType) => {
  const { theme, formType } = constants;

  switch (inputType) {
    case formType.authForm:
      return 20;

    default:
      return theme.secondaryFontSize;
  }
};

export default setInputFontSize;
