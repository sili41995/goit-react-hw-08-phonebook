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
import { errorToast, successToast } from 'utils/toasts';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

const AddContactForm = () => {
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
    dispatch(addContact(data))
      .unwrap()
      .then(() => {
        successToast('Contact added successfully');
      })
      .catch(() => {
        errorToast('Adding a contact failed');
      });
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
        {errors.name && errorToast('Name is required')}
        <Input
          {...register('number', { required: true })}
          type="tel"
          placeholder="Phone"
        />
        {errors.number && errorToast('Phone is required')}
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
