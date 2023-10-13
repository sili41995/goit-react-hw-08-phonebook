import { formType, theme } from 'constants';

const setInputBorderColor = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.borderColor;
  }
};

export default setInputBorderColor;
