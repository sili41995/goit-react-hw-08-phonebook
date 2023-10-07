import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputFontSize = (inputType) => {
  switch (inputType) {
    case formType.authForm:
      return 20;

    default:
      return theme.secondaryFontSize;
  }
};

export default setInputFontSize;
