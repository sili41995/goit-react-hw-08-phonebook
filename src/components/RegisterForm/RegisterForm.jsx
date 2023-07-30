import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import {
  FormContainer,
  Form,
  Button,
  Message,
  Title,
  textFieldStyle,
  LogInLink,
} from './RegisterForm.styled';
import Toast from 'components/Toast';

const errorNotify = (message) => {
  toast.error(message);
};

const RegisterForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <FormContainer>
        <Title>sign up</Title>
        <Message>Welcome to Phonebook!</Message>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register('name', { required: true })}
            type="text"
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{
              '& > :not(style)': {
                ...textFieldStyle,
              },
            }}
          />
          {errors.name && errorNotify('Username is required')}
          <TextField
            {...register('email', { required: true })}
            type="email"
            id="outlined-basic"
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
            id="outlined-basic"
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
            <LogInLink to="/login">Log in</LogInLink> if you have an account
          </Message>
          <Button value="Enlist" type="submit" />
        </Form>
      </FormContainer>
      <Toast />
    </>
  );
};

export default RegisterForm;
