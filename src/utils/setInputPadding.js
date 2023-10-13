import { theme, formType } from 'constants';

const setInputPadding = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return `${theme.spacing(2)} ${theme.spacing(4)}`;

    case formType.authForm:
      return `${theme.spacing(2)} ${theme.spacing(10)}`;

    default:
      return `${theme.spacing(2)} ${theme.spacing(9)}`;
  }
};

export default setInputPadding;
