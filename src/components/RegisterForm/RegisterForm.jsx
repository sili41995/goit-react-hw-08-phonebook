import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Input } from './RegisterForm.styled';
import { errorNotify } from 'utils/toasts';
import AuthFormMessage from 'components/AuthFormMessage';
import { loginPath } from 'constants/pathNames';

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
        {errors.name && errorNotify('Username is required')}
        <Input
          {...register('email', { required: true })}
          type="email"
          placeholder="Email"
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
          action={'Log in'}
          pageLink={`/${loginPath}`}
          message={'if you have an account'}
        />
        <Button type="submit">Enlist</Button>
      </Form>
    </>
  );
};

export default RegisterForm;
