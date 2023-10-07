import formType from 'constants/formType';

const setInputBorderRadius = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return 4;

    default:
      return 8;
  }
};

export default setInputBorderRadius;
