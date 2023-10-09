import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image } from './LoginForm.styled';
import defaultAvatar from '../default-signin-avatar.png';
import utils from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import { loginUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import pagesPath from 'constants/pagesPath';
import formType from 'constants/formType';

const { toasts } = utils;

const LoginForm = () => {
  const [credentials, setCredentials] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(loginUser(credentials));
      promise.unwrap().then(() => {
        toasts.successToast('Hello, my friend!');
      });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image src={defaultAvatar} alt="user avatar" />
      <Form onSubmit={handleSubmit(setCredentials)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type="email"
          placeholder="Email"
          inputType={formType.authForm}
          autoFocus
        />
        {errors.email && toasts.errorToast('Email is required')}
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type="password"
          placeholder="Password"
          inputType={formType.authForm}
        />
        {errors.password &&
          toasts.errorToast(
            errors.password.type === 'required'
              ? 'Password is required'
              : 'Password minimum length is 7 characters'
          )}
        <AuthFormMessage
          action={'Sign up'}
          pageLink={`/${pagesPath.registerPath}`}
          message={"if you don't have an account yet"}
        />
        <Button disabled={isLoading} type="submit">
          Log in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
