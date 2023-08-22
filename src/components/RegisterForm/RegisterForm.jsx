import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Input } from './RegisterForm.styled';
import { errorToast, successToast } from 'utils/toasts';
import AuthFormMessage from 'components/AuthFormMessage';
import { registerUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import pagesPath from 'constants/pagesPath';

const RegisterForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        successToast('Hello, my friend!');
      });
  };

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

  return (
    <>
      <Title>sign up</Title>
      <Message>Welcome to Phonebook!</Message>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('name', { required: true })}
          type="text"
          placeholder="Username"
        />
        {errors.name && errorToast('Username is required')}
        <Input
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
        />
        {errors.email && errorToast('Email is required')}
        <Input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
          placeholder="Password"
        />
        {errors.password &&
          errorToast(
            errors.password.type === 'required'
              ? 'Password is required'
              : 'Password minimum length is 7 characters'
          )}
        <AuthFormMessage
          action={'Log in'}
          pageLink={`/${pagesPath.loginPath}`}
          message={'if you have an account'}
        />
        <Button disabled={isLoading} type="submit">
          Enlist
        </Button>
      </Form>
    </>
  );
};

export default RegisterForm;
