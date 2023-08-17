import { useState } from 'react';
import {
  EditButton,
  Container,
  EditIcon,
  ButtonContainer,
  DeleteButton,
  DeleteIcon,
} from './ContactDetails.styled';
import ContactInfo from 'components/ContactInfo';
import EditForm from 'components/EditForm';
import makeBlur from 'utils/makeBlur';
import ContactModalForm from 'components/ContactModalForm';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  const handleEditBtnClick = (e) => {
    setEditState();
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <ButtonContainer>
        {!editContact && (
          <DeleteButton>
            <DeleteIcon />
          </DeleteButton>
        )}
        <EditButton onClick={handleEditBtnClick}>
          <EditIcon />
        </EditButton>
      </ButtonContainer>
      {editContact ? (
        <ContactModalForm>
          <EditForm setEditContact={handleEditBtnClick} />
        </ContactModalForm>
      ) : (
        <ContactInfo />
      )}
    </Container>
  );
};

export default ContactDetails;
