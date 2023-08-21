import { Link, useLocation } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import {
  EditButton,
  Buttons,
  Form,
  Title,
  Input,
} from './AddContactForm.styled';
import { errorNotify } from 'utils/toasts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const AddContactForm = () => {
  //после создания контакта тоже должна выскакивать нотификашка
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
    reset,
  } = useForm();
  const location = useLocation();
  const goBackLink = location.state?.from || '/';

  const onSubmit = (data) => {
    dispatch(addContact(data));
    reset();
  };

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', { required: true, minLength: 1 })}
          type="text"
          placeholder="Name"
        />
        {errors.name && errorNotify('Name is required')}
        <Input
          {...register('number', { required: true })}
          type="tel"
          placeholder="Phone"
        />
        {errors.number && errorNotify('Phone is required')}
        <Buttons>
          <EditButton type="submit">
            <GiCheckMark />
          </EditButton>
          <Link to={goBackLink}>Cancel</Link>
        </Buttons>
      </Form>
    </>
  );
};

export default AddContactForm;
