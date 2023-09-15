import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { errorToast, successToast } from 'utils/toasts';
import { addContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import IconButton from 'components/IconButton';
import iconBtnType from 'constants/iconBtnType';
import { Buttons, Form, Title, Input } from './AddContactForm.styled';

const AddContactForm = () => {
  const [newContact, setNewContact] = useState(null);
  const isLoading = useSelector(selectIsLoading);
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

  useEffect(() => {
    if (newContact) {
      const promise = dispatch(addContact(newContact));
      promise
        .unwrap()
        .then(() => {
          successToast('Contact added successfully');
          reset();
        })
        .catch(() => {
          errorToast('Adding a contact failed');
        });
    }
  }, [dispatch, newContact, reset]);

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(setNewContact)}>
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
          <IconButton
            disabled={isLoading}
            btnType={iconBtnType.accept}
            width={44}
            height={35}
            type="submit"
          >
            <GiCheckMark />
          </IconButton>
          <Link to={goBackLink}>Cancel</Link>
        </Buttons>
      </Form>
    </>
  );
};

export default AddContactForm;
