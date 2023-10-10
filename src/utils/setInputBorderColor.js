import constants from 'constants';

const setInputBorderColor = (inputType) => {
  const { formType } = constants;

  switch (inputType) {
    case formType.filter:
      return '#ffffff';

    default:
      return 'rgba(33, 33, 33, 0.2)';
  }
};

export default setInputBorderColor;
