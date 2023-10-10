import constants from 'constants';

const setInputPadding = (inputType) => {
  const { theme, formType } = constants;

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
