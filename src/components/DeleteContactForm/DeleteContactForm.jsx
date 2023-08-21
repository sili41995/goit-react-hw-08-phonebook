import React from 'react';
import { Message, Title } from './DeleteContactForm.styled';
import useTargetContact from 'hooks/useTargetContact';

export const DeleteContactForm = () => {
  const { name } = useTargetContact();

  return (
    <>
      <Title>Are you serious?</Title>
      <Message>
        Do you want to delete contact <b>{name}</b>?
      </Message>
    </>
  );
  //
};

export default DeleteContactForm;
