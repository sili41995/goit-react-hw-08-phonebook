import constants from 'constants';

const setInputBorderColor = (inputType) => {
  const { formType, theme } = constants;

  switch (inputType) {
    case formType.filter:
      return theme.colors.whiteColor;

    default:
      return 'rgba(33, 33, 33, 0.2)';
  }
};

export default setInputBorderColor;
