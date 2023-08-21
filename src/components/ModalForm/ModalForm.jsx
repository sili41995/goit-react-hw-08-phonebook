import React from 'react';
import { Backdrop, Container } from './ModalForm.styled';
import { createPortal } from 'react-dom';

const ModalForm = ({ children }) => {
  return createPortal(
    <Backdrop>
      <Container>{children}</Container>
    </Backdrop>,
    document.querySelector('#popup-root')
  );
};

export default ModalForm;
