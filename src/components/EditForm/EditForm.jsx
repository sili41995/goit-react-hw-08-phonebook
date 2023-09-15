import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GoX } from 'react-icons/go';
import { GiCheckMark } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title, Input } from './EditForm.styled';
import IconButton from 'components/IconButton';
import { errorToast, successToast } from 'utils/toasts';
import getContactInfo from 'utils/getContactInfo';
import useTargetContact from 'hooks/useTargetContact';
import { updateContact } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import iconBtnType from 'constants/iconBtnType';
import pagesPath from 'constants/pagesPath';

const EditForm = ({ setEditContact }) => {
  const [contact, setContact] = useState(null);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const id = useParams()[pagesPath.dynamicParam];
  const targetContact = useTargetContact();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (contact) {
      const promise = dispatch(updateContact({ contact, id }));
      promise
        .unwrap()
        .then(() => {
          successToast('Contact updated successfully');
        })
        .catch(() => {
          errorToast('Contact update failed');
        });
    }
  }, [contact, dispatch, id]);

  const { name, number } = getContactInfo(targetContact);

  return (
    <>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(setContact)}>
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
