import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { Container, ButtonContainer } from './ContactDetails.styled';
import ContactInfo from 'components/ContactInfo';
import EditForm from 'components/EditForm';
import ContactModalForm from 'components/ContactModalForm';
import IconButton from 'components/IconButton';
import makeBlur from 'utils/makeBlur';
import { errorToast, successToast } from 'utils/toasts';
import { deleteContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import iconBtnType from 'constants/iconBtnType';
import pagesPath from 'constants/pagesPath';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = useParams()[pagesPath.dynamicParam];

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
        navigate(`/${pagesPath.contactsPath}`);
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
              disabled={isLoading}
              btnType={iconBtnType.delete}
              width={44}
              height={35}
              onBtnClick={handleDeleteBtnClick}
            >
              <AiOutlineDelete />
            </IconButton>
          )}
          <IconButton
            btnType={iconBtnType.edit}
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
