import { StyledInput } from './Input.styled';

const Input = ({ settings, inputRef, ...otherProps }) => {
  return <StyledInput ref={inputRef} {...settings} {...otherProps} />;
};

export default Input;
