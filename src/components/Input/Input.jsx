import { forwardRef } from 'react';
import { Container, StyledInput } from './Input.styled';
import IconButton from 'components/IconButton';

const Input = forwardRef(
  (
    {
      settings,
      inputWrap,
      btnType,
      children,
      action,
      right = 10,
      ...otherProps
    },
    ref
  ) => {
    const input = <StyledInput ref={ref} {...settings} {...otherProps} />;
    const inputWithWrap = (
      <Container>
        {input}
        <IconButton
          top="center"
          right={right}
          position="absolute"
          btnType={btnType}
          width={44}
          height={35}
          onBtnClick={action}
          inputWrap
        >
          {children}
        </IconButton>
      </Container>
    );

    return inputWrap ? inputWithWrap : input;
  }
);

export default Input;
