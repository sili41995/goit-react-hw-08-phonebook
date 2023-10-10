import constants from 'constants';

const setInputBorderRadius = (inputType) => {
  const { formType } = constants;

  switch (inputType) {
    case formType.filter:
      return 4;

    default:
      return 8;
  }
};

export default setInputBorderRadius;
