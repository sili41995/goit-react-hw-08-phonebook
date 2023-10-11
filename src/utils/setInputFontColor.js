import constants from 'constants';

const setInputFontColor = (inputType) => {
  const { theme, formType } = constants;

  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.primaryFontColor;
  }
};

export default setInputFontColor;
