import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title, Input } from './EditForm.styled';
import { errorToast, successToast } from 'utils/toasts';
import IconButton from 'components/IconButton/IconButton';
import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
import getContactInfo from 'utils/getContactInfo';
import useTargetContact from 'hooks/useTargetContact';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { updateContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import iconBtnType from 'constants/iconBtnType';

const EditForm = ({ setEditContact }) => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const { id } = useParams();
  const targetContact = useTargetContact();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (!targetContact) {
    return;
  }

  const { name, number } = getContactInfo(targetContact);
  const onSubmit = (data) => {
    dispatch(updateContact({ data, id }))
      .unwrap()
      .then(() => {
        successToast('Contact updated successfully');
      })
      .catch(() => {
        errorToast('Contact update failed');
      });
  };

  return (
    <>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          defaultValue={name}
          {...register('name', { required: true })}
          type="text"
          placeholder="Name"
        />
        {errors.name && errorToast('Name is required')}
        <Input
          defaultValue={number}
          {...register('number', { required: true })}
          type="tel"
          placeholder="Phone"
        />
        {errors.number && errorToast('Phone is required')}
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
