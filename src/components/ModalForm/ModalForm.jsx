import React, { useEffect } from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import { Backdrop, Container, Buttons } from './ModalForm.styled';
import { createPortal } from 'react-dom';
import IconButton from 'components/IconButton';

const ModalForm = ({ children, setModalWinState, action }) => {
  useEffect(() => {
    const hideModalWin = (e) => {
      if (e.code === 'Escape') {
        setModalWinState();
      }
    };

    window.addEventListener('keydown', hideModalWin);

    return () => {
      window.removeEventListener('keydown', hideModalWin);
    };
  }, [setModalWinState]);

  const hideModalWin = (e) => {
    if (e.target === e.currentTarget) {
      setModalWinState();
    }
  };

  return createPortal(
    <Backdrop onClick={hideModalWin}>
      <Container>
        {children}
        <Buttons>
          <IconButton
            btnType="accept"
            width={44}
            height={35}
            onBtnClick={action}
          >
            <GiCheckMark />
          </IconButton>
          <IconButton
            btnType="cancel"
            width={44}
            height={35}
            onBtnClick={() => {
              setModalWinState();
            }}
          >
            <GoX />
          </IconButton>
        </Buttons>
      </Container>
    </Backdrop>,
    document.querySelector('#popup-root')
  );
};

export default ModalForm;
