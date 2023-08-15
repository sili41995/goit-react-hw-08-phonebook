import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title } from './RegisterForm.styled';
import Toast from 'components/Toast';
import { errorNotify } from 'utils/toasts';
import AuthFormMessage from 'components/AuthFormMessage';
import { loginPageLink } from 'constants/authPagesLinks';

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Title>sign up</Title>
      <Message>Welcome to Phonebook!</Message>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Username"
        />
        {errors.name && errorNotify('Username is required')}
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
        />
        {errors.email && errorNotify('Email is required')}
        <input
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
          action={'Log in'}
          pageLink={loginPageLink}
          message={'if you have an account'}
        />
        <Button value="Enlist" type="submit" />
      </Form>
      <Toast />
    </>
  );
};

export default RegisterForm;
