import { theme, formType } from 'constants';

const setInputFontColor = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.primaryFontColor;
  }
};

export default setInputFontColor;
