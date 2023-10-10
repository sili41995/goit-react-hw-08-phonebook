import constants from 'constants';

const setInputFontColor = (inputType) => {
  const { theme, formType } = constants;

  switch (inputType) {
    case formType.filter:
      return theme.secondaryFontColor;

    default:
      return theme.primaryFontColor;
  }
};

export default setInputFontColor;
