import formType from 'constants/formType';

const setInputBorderColor = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return '#ffffff';

    default:
      return 'rgba(33, 33, 33, 0.2)';
  }
};

export default setInputBorderColor;
