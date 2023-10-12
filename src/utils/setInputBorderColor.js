import constants from 'constants';

const setInputBorderColor = (inputType) => {
  const { formType, theme } = constants;

  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.borderColor;
  }
};

export default setInputBorderColor;
