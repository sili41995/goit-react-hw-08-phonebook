import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import {
  Form,
  Button,
  Message,
  Title,
  Image,
  textFieldStyle,
  SignUpLink,
} from './LoginForm.styled';
import Toast from 'components/Toast';
import defaultAvatar from '../default-signin-avatar.png';
import { errorNotify } from 'utils/toasts';

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
        <TextField
          {...register('email', { required: true })}
          type="email"
          label="Email"
          variant="outlined"
          sx={{
            '& > :not(style)': {
              ...textFieldStyle,
            },
          }}
        />
        {errors.email && errorNotify('Email is required')}
        <TextField
          {...register('password', { required: true, minLength: 7 })}
          type="password"
          label="Password"
          variant="outlined"
          sx={{
            '& > :not(style)': {
              ...textFieldStyle,
            },
          }}
        />
        {errors.password &&
          errorNotify(
            errors.password.type === 'required'
              ? 'Password is required'
              : 'Password minimum length is 7 characters'
          )}
        <Message>
          <SignUpLink to="/register">Sign up</SignUpLink> if you don't have an
          account yet
        </Message>
        <Button value="Log in" type="submit" />
      </Form>
      <Toast />
    </>
  );
};

export default LoginForm;
