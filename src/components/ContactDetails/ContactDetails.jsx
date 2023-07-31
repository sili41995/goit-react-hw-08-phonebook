import { useState } from 'react';
import { EditButton, Container, EditIcon } from './ContactDetails.styled';
import Contact from 'components/ContactInfo';
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
      {editContact ? <EditForm setEditContact={setEditContact} /> : <Contact />}
    </Container>
  );
};

export default ContactDetails;
