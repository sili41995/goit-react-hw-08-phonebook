import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { Container, ButtonContainer } from './ContactDetails.styled';
import ContactInfo from 'components/ContactInfo';
import EditForm from 'components/EditForm';
import makeBlur from 'utils/makeBlur';
import ContactModalForm from 'components/ContactModalForm';
import IconButton from 'components/IconButton';
import ModalForm from 'components/ModalForm';
import DeleteContactForm from 'components/DeleteContactForm/DeleteContactForm';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  const handleEditBtnClick = (e) => {
    setEditState();
    makeBlur(e.currentTarget);
  };

  const handleDeleteBtnClick = (e) => {
    makeBlur(e.currentTarget);
    setShowModalForm((prevState) => !prevState);
    console.log(1);
  };

  return (
    <>
      <Container>
        <ButtonContainer>
          {!editContact && (
            <IconButton
              type="delete"
              width={44}
              height={35}
              onBtnClick={handleDeleteBtnClick}
            >
              <AiOutlineDelete />
            </IconButton>
          )}
          <IconButton
            type="edit"
            width={44}
            height={35}
            onBtnClick={handleEditBtnClick}
          >
            <CiEdit />
          </IconButton>
        </ButtonContainer>
        {editContact ? (
          <ContactModalForm>
            <EditForm setEditContact={handleEditBtnClick} />
          </ContactModalForm>
        ) : (
          <ContactInfo />
        )}
      </Container>
      {showModalForm && (
        <ModalForm>
          <DeleteContactForm />
        </ModalForm>
      )}
    </>
  );
};

export default ContactDetails;
