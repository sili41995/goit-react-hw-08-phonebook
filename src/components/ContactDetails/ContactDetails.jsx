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

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  const handleEditBtnClick = (e) => {
    setEditState();
    e.currentTarget.blur();
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
        <EditForm setEditContact={setEditContact} />
      ) : (
        <ContactInfo />
      )}
    </Container>
  );
};

export default ContactDetails;
