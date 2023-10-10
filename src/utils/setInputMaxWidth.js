import constants from 'constants';

const setInputMaxWidth = (inputType) => {
  const { formType } = constants;

  switch (inputType) {
    case formType.filter:
      return '200px';

    default:
      return false;
  }
};

export default setInputMaxWidth;
