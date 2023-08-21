import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image, Input } from './LoginForm.styled';
import defaultAvatar from '../default-signin-avatar.png';
import { errorToast, successToast } from 'utils/toasts';
import AuthFormMessage from 'components/AuthFormMessage';
import { registerPath } from 'constants/pathNames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import useToken from 'hooks/useToken';

const LoginForm = () => {
  useToken();
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm();

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit = (data) => {
    dispatch(loginUser(data))
      .unwrap()
      .then(() => {
        successToast('Hello, my friend!');
      });
  };

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image src={defaultAvatar} alt="user avatar" />
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          action={'Sign up'}
          pageLink={`/${registerPath}`}
          message={"if you don't have an account yet"}
        />
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};

export default LoginForm;
