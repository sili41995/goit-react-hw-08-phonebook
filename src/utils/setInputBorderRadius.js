import constants from 'constants';

const setInputBorderRadius = (inputType) => {
  const { formType, theme } = constants;

  switch (inputType) {
    case formType.filter:
      return theme.primaryBorderRadius;

    default:
      return 8;
  }
};

export default setInputBorderRadius;
