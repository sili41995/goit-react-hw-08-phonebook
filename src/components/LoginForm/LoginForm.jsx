import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image } from './LoginForm.styled';
import Toast from 'components/Toast';
import defaultAvatar from '../default-signin-avatar.png';
import { errorNotify } from 'utils/toasts';
import AuthFormMessage from 'components/AuthFormMessage';
import { registerPageLink } from 'constants/authPagesLinks';

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image src={defaultAvatar} alt="user avatar" />
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          action={'Sign up'}
          pageLink={registerPageLink}
          message={"if you don't have an account yet"}
        />
        <Button value="Log in" type="submit" />
      </Form>
      <Toast />
    </>
  );
};

export default LoginForm;
