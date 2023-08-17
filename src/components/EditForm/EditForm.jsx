import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import {
  EditButton,
  CancelButton,
  Buttons,
  Form,
  Title,
  textFieldStyle,
  EditIcon,
  CancelIcon,
} from './EditForm.styled';
import Toast from 'components/Toast';
import { errorNotify } from 'utils/toasts';

const EditForm = ({ setEditContact }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEditContact();
  };

  return (
    <>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('name', { required: true, minLength: 1 })}
          type="text"
          label="Name"
          variant="outlined"
          sx={{
            '& > :not(style)': {
              ...textFieldStyle,
            },
          }}
        />
        {errors.name && errorNotify('Name is required')}
        <TextField
          {...register('number', { required: true })}
          type="tel"
          label="Phone"
          variant="outlined"
          sx={{
            '& > :not(style)': {
              ...textFieldStyle,
            },
          }}
        />
        {errors.number && errorNotify('Phone is required')}
        <Buttons>
          <EditButton type="submit">
            <EditIcon />
          </EditButton>
          <CancelButton type="button" onClick={setEditContact}>
            <CancelIcon />
          </CancelButton>
        </Buttons>
      </Form>
      <Toast />
    </>
  );
};

export default EditForm;
