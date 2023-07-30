import { useState } from 'react';
import { EditButton, Container, EditIcon } from './ContactDetails.styled';
import Contact from 'components/ContactInfo';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);

  return (
    <Container>
      <EditButton
        onClick={() => {
          setEditContact((editContact) => !editContact);
        }}
      >
        <EditIcon />
      </EditButton>
      {editContact ? false : <Contact />}
    </Container>
  );
};

export default ContactDetails;
