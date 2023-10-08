import { forwardRef } from 'react';
import { StyledInput } from './Input.styled';

const Input = forwardRef(({ settings, ...otherProps }, ref) => (
  <StyledInput ref={ref} {...settings} {...otherProps} />
));

export default Input;
