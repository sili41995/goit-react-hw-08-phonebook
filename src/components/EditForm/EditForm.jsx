import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';
import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import TextField from '@mui/material/TextField';
import {
  Container,
  EditButton,
  CancelButton,
  Buttons,
  Form,
  Title,
} from './EditForm.styled';
import Toast from 'components/Toast';

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

const CancelIcon = styled(GoX)`
  width: 100%;
  height: 100%;
  fill: #d3232f;
  stroke: inherit;
`;

const errorNotify = (message) => {
  toast.error(message);
};

const EditForm = ({ setEditContact }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEditContact();
  };

  return (
    <>
      <Container>
        <Title>Contact editing</Title>
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
            <CancelButton type="button" onClick={() => reset()}>
              <CancelIcon />
            </CancelButton>
          </Buttons>
        </Form>
      </Container>
      <Toast />
    </>
  );
};

export default EditForm;
