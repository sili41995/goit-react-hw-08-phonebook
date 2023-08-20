import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import {
  EditButton,
  CancelButton,
  Buttons,
  Form,
  Title,
  EditIcon,
  CancelIcon,
  Input,
} from './EditForm.styled';
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
        <Input
          {...register('name', { required: true })}
          type="text"
          placeholder="Name"
        />
        {errors.name && errorNotify('Name is required')}
        <Input
          {...register('number', { required: true })}
          type="tel"
          placeholder="Phone"
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
    </>
  );
};

export default EditForm;
