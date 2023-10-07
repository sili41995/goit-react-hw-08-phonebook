import formType from 'constants/formType';
import theme from 'constants/theme';

const setInputPadding = (inputType) => {
  switch (inputType) {
    case formType.filter:
      return `${theme.spacing * 2}px ${theme.spacing * 4}px`;

    case formType.authForm:
      return `${theme.spacing * 2}px ${theme.spacing * 10}px`;

    default:
      return `${theme.spacing * 2}px ${theme.spacing * 9}px`;
  }
};

export default setInputPadding;
