import { MdEmail } from 'react-icons/md';
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image } from './LoginForm.styled';
import defaultAvatar from '../default-signin-avatar.png';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import { pagesPath, formType, iconBtnType } from 'constants';
import { selectIsLoading } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';

const LoginForm = () => {
  const [credentials, setCredentials] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();
  const watchPassword = watch('password');
  const pageLink = `/${pagesPath.registerPath}`;

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

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
          inputWrap
          fieldIcon={<MdEmail />}
          fieldIconSize={20}
        />
        {errors.email && toasts.errorToast('Email is required')}
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type={isShowPassword ? 'text' : 'password'}
          placeholder="Password"
          inputType={formType.authForm}
          children={
            isShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />
          }
          btnType={watchPassword && iconBtnType.toggleShowPassword}
          action={toggleIsShowPassword}
          inputWrap
          fieldIcon={<AiFillLock />}
          fieldIconSize={20}
        />
        {errors.password &&
          toasts.errorToast(
            errors.password.type === 'required'
              ? 'Password is required'
              : 'Password minimum length is 7 characters'
          )}
        <AuthFormMessage
          action={'Sign up'}
          pageLink={pageLink}
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
