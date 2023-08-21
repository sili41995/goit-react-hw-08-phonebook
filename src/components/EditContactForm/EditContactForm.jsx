import React from 'react';
import { Message, Title } from './EditContactForm.styled';
import useTargetContact from 'hooks/useTargetContact';

export const EditContactForm = () => {
  const { name } = useTargetContact();

  return (
    <>
      <Title>Are you serious?</Title>
      <Message>
        Do you want to edit contact <b>{name}</b>?
      </Message>
    </>
  );
  //
};

export default EditContactForm;
