import { formType, theme } from 'constants';

const setInputBorderRadius = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return theme.borderRadius.primaryBorderRadius;

    default:
      return theme.borderRadius.secondaryBorderRadius;
  }
};

export default setInputBorderRadius;
