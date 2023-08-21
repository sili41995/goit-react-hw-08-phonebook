import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { Container, ButtonContainer } from './ContactDetails.styled';
import ContactInfo from 'components/ContactInfo';
import EditForm from 'components/EditForm';
import makeBlur from 'utils/makeBlur';
import ContactModalForm from 'components/ContactModalForm';
import IconButton from 'components/IconButton';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteContact } from 'redux/contacts/operations';
import { errorToast, successToast } from 'utils/toasts';
import { contactsPath } from 'constants/pathNames';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  const handleEditBtnClick = (e) => {
    setEditState();
    makeBlur(e.currentTarget);
  };

  const handleDeleteBtnClick = (e) => {
    makeBlur(e.currentTarget);
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        successToast('Contact successfully removed');
        navigate(`/${contactsPath}`);
      })
      .catch(() => {
        errorToast('Deleting a contact failed');
      });
  };

  return (
    <>
      <Container>
        <ButtonContainer>
          {!editContact && (
            <IconButton
              btnType="delete"
              width={44}
              height={35}
              onBtnClick={handleDeleteBtnClick}
            >
              <AiOutlineDelete />
            </IconButton>
          )}
          <IconButton
            btnType="edit"
            width={44}
            height={35}
            onBtnClick={handleEditBtnClick}
          >
            <CiEdit />
          </IconButton>
        </ButtonContainer>
        {editContact ? (
          <ContactModalForm>
            <EditForm setEditContact={setEditState} />
          </ContactModalForm>
        ) : (
          <ContactInfo />
        )}
      </Container>
    </>
  );
};

export default ContactDetails;
