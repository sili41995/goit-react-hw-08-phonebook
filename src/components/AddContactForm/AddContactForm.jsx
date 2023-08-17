import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import {
  EditButton,
  CancelButton,
  Buttons,
  Form,
  Title,
  EditIcon,
} from './AddContactForm.styled';
import Toast from 'components/Toast';
import { errorNotify } from 'utils/toasts';

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
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: true, minLength: 1 })}
          type="text"
          placeholder="Name"
        />
        {errors.name && errorNotify('Name is required')}
        <input
          {...register('number', { required: true })}
          type="tel"
          placeholder="Phone"
        />
        {errors.number && errorNotify('Phone is required')}
        <Buttons>
          <EditButton type="submit">
            <EditIcon />
          </EditButton>
          <CancelButton to={goBackLink}>Cancel</CancelButton>
        </Buttons>
      </Form>
      <Toast />
    </>
  );
};

export default AddContactForm;
