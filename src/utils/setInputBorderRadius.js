import constants from 'constants';

const setInputBorderRadius = (inputType) => {
  const { formType, theme } = constants;

  switch (inputType) {
    case formType.filter:
      return theme.borderRadius.primaryBorderRadius;

    default:
      return theme.borderRadius.secondaryBorderRadius;
  }
};

export default setInputBorderRadius;
