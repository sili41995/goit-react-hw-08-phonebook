import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputFontColor = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return theme.secondaryFontColor;

    default:
      return theme.primaryFontColor;
  }
};

export default setInputFontColor;
