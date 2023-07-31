import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { GiCheckMark } from 'react-icons/gi';
import TextField from '@mui/material/TextField';
import {
  Container,
  EditButton,
  CancelButton,
  Buttons,
  Form,
  Title,
} from './AddContactForm.styled';
import Toast from 'components/Toast';
import { useLocation } from 'react-router-dom';

const textFieldStyle = {
  fontFamily: 'Inter',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
};

const EditIcon = styled(GiCheckMark)`
  width: 100%;
  height: 100%;
  fill: #00c938;
  stroke: inherit;
`;

const errorNotify = (message) => {
  toast.error(message);
};

const AddContactForm = () => {
  //кнопка кенсел ведет на предыдущую страницу
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
            id="outlined-basic"
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
            id="outlined-basic"
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
