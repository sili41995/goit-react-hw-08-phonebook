import constants from 'constants';

const setInputFontSize = (inputType) => {
  const { theme, formType } = constants;

  switch (inputType) {
    case formType.authForm:
      return theme.fontSize.otherFontSize;

    default:
      return theme.fontSize.secondaryFontSize;
  }
};

export default setInputFontSize;
