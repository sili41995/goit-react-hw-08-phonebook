import { useState } from 'react';
import { EditButton, Container, EditIcon } from './ContactDetails.styled';
import ContactInfo from 'components/ContactInfo';
import EditForm from 'components/EditForm';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  return (
    <Container>
      <EditButton
        onClick={() => {
          setEditState();
        }}
      >
        <EditIcon />
      </EditButton>
      {editContact ? (
        <EditForm setEditContact={setEditContact} />
      ) : (
        <ContactInfo />
      )}
    </Container>
  );
};

export default ContactDetails;
