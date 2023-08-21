import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title, Input } from './EditForm.styled';
import { errorNotify } from 'utils/toasts';
import IconButton from 'components/IconButton/IconButton';
import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import getContactInfo from 'utils/getContactInfo';
import useTargetContact from 'hooks/useTargetContact';
import { useState } from 'react';
import ModalForm from 'components/ModalForm/ModalForm';
import EditContactForm from 'components/EditContactForm/EditContactForm';

const EditForm = ({ setEditContact }) => {
  const [showModalForm, setShowModalForm] = useState(false);
  const targetContact = useTargetContact();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (!targetContact) {
    return;
  }

  const { name, number } = getContactInfo(targetContact);
  const onSubmit = (data) => {
    setShowModalForm((prevState) => !prevState);
  };

  return (
    <>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue={name}
          {...register('name', { required: true })}
          type="text"
          placeholder="Name"
        />
        {errors.name && errorNotify('Name is required')}
        <Input
          defaultValue={number}
          {...register('number', { required: true })}
          type="tel"
          placeholder="Phone"
        />
        {errors.number && errorNotify('Phone is required')}
        <Buttons>
          <IconButton btnType="accept" width={44} height={35} type="submit">
            <GiCheckMark />
          </IconButton>
          <IconButton
            btnType="cancel"
            width={44}
            height={35}
            onBtnClick={setEditContact}
          >
            <GoX />
          </IconButton>
        </Buttons>
      </Form>
      {showModalForm && (
        <ModalForm
          setModalWinState={setShowModalForm}
          action={() => {
            console.log(11111);
          }}
        >
          <EditContactForm />
        </ModalForm>
      )}
    </>
  );
};

export default EditForm;

<Buttons></Buttons>;
