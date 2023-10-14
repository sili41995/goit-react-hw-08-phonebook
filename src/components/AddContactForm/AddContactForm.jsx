import { HiPhone } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { Buttons, Form, Title } from './AddContactForm.styled';
import { toasts } from 'utils';
import { iconBtnType } from 'constants';
import { selectIsLoading } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';

const AddContactForm = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const location = useLocation();
  const goBackLink = location.state?.from || '/';

  const handleFormSubmit = (data) => {
    dispatch(addContact(data))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact added successfully');
        reset();
      })
      .catch(() => {
        toasts.errorToast('Adding a contact failed');
      });
  };

  return (
    <>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('name', { required: true, minLength: 1 }) }}
          type="text"
          placeholder="Name"
          autoFocus
          inputWrap
          fieldIcon={<FaUser />}
          fieldIconSize={18}
        />
        {errors.name && toasts.errorToast('Name is required')}
        <Input
          settings={{ ...register('number', { required: true }) }}
          type="tel"
          placeholder="Phone"
          inputWrap
          fieldIcon={<HiPhone />}
          fieldIconSize={18}
        />
        {errors.number && toasts.errorToast('Phone is required')}
        <Buttons>
          <IconButton
            disabled={isLoading}
            btnType={iconBtnType.accept}
            width={44}
            height={35}
            type="submit"
          >
            <GiCheckMark />
          </IconButton>
          <Link to={goBackLink}>Cancel</Link>
        </Buttons>
      </Form>
    </>
  );
};

export default AddContactForm;
