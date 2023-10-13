import { formType } from 'constants';

const setInputFilter = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))';

    default:
      return;
  }
};

export default setInputFilter;
