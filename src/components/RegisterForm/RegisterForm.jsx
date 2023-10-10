import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title } from './RegisterForm.styled';
import utils from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import constants from 'constants';
import { registerUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';

const { formType, pagesPath } = constants;
const { toasts } = utils;

const RegisterForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data))
      .unwrap()
      .then(() => {
        toasts.successToast('Hello, my friend!');
      });
  };

  return (
    <>
      <Title>sign up</Title>
      <Message>Welcome to Phonebook!</Message>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('name', { required: true }) }}
          type="text"
          placeholder="Username"
          inputType={formType.authForm}
          autoFocus
        />
        {errors.name && toasts.errorToast('Username is required')}
        <Input
          settings={{ ...register('email', { required: true }) }}
          type="email"
          placeholder="Email"
          inputType={formType.authForm}
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
