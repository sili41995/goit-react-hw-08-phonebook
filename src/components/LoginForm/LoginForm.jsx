import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image, Input } from './LoginForm.styled';
import Toast from 'components/Toast';
import defaultAvatar from '../default-signin-avatar.png';
import { errorNotify } from 'utils/toasts';
import AuthFormMessage from 'components/AuthFormMessage';
import { registerPath } from 'constants/pathNames';
import { useEffect, useRef } from 'react';
import makeFocus from 'utils/makeFocus';

const LoginForm = () => {
  const emailRef = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    makeFocus(emailRef.current);
  }, []);

  const onSubmit = (data) => {
    console.log(data);
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
          ref={emailRef}
        />
        {errors.email && errorNotify('Email is required')}
        <Input
          {...register('password', { required: true, minLength: 7 })}
          type="password"
          placeholder="Password"
        />
        {errors.password &&
          errorNotify(
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
      <Toast />
    </>
  );
};

export default LoginForm;
