import TextField from '@mui/material/TextField';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import {
  Container,
  EditButton,
  CancelButton,
  Buttons,
  Form,
  Title,
  textFieldStyle,
  EditIcon,
} from './AddContactForm.styled';
import Toast from 'components/Toast';

const errorNotify = (message) => {
  toast.error(message);
};

const AddContactForm = () => {
  //после создания контакта тоже должна выскакивать нотификашка
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const location = useLocation();
  const goBackLink = location.state?.from || '/';

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Container>
        <Title>Add contact</Title>
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
            <CancelButton to={goBackLink}>Cancel</CancelButton>
          </Buttons>
        </Form>
      </Container>
      <Toast />
    </>
  );
};

export default AddContactForm;
