import { formType } from 'constants';

const setInputHeight = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return false;

    case formType.authForm:
      return '60px';

    default:
      return '50px';
  }
};

export default setInputHeight;
