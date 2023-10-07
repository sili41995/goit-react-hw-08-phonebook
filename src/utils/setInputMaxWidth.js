import formType from 'constants/formType';

const setInputMaxWidth = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return '200px';

    default:
      return false;
  }
};

export default setInputMaxWidth;
