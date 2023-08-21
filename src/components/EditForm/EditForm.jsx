import { useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title, Input } from './EditForm.styled';
import { errorNotify } from 'utils/toasts';
import { useEffect } from 'react';
import IconButton from 'components/IconButton/IconButton';
import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';

const EditForm = ({ setEditContact }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setFocus,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setEditContact();
  };

  useEffect(() => {
    setFocus('name');
  }, [setFocus]);

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
          <IconButton btnType="accept" width={44} height={35} type="submit">
            <GiCheckMark />
          </IconButton>
          <IconButton
            btnType="cancel"
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

<Buttons></Buttons>;
