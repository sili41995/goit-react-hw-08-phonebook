import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title } from './EditForm.styled';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import utils from 'utils';
import hooks from 'hooks';
import constants from 'constants';
import { updateContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';

const { getContactInfo, toasts } = utils;
const { pagesPath, iconBtnType } = constants;
const { useTargetContact } = hooks;

const EditForm = ({ setEditContact }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const id = useParams()[pagesPath.dynamicParam];
  const targetContact = useTargetContact();
  const { name, number } = getContactInfo(targetContact);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleFormSubmit = (data) => {
    dispatch(updateContact({ data, id }))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact updated successfully');
      })
      .catch(() => {
        toasts.errorToast('Contact update failed');
      });
  };

  return (
    <>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          defaultValue={name}
          settings={{ ...register('name', { required: true }) }}
          type="text"
          placeholder="Name"
        />
        {errors.name && toasts.errorToast('Name is required')}
        <Input
          defaultValue={number}
          settings={{ ...register('number', { required: true }) }}
          type="tel"
          placeholder="Phone"
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
          <IconButton
            btnType={iconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={setEditContact}
          >
            <GoX />
          </IconButton>
        </Buttons>
      </Form>
    </>
  );
};

export default EditForm;
