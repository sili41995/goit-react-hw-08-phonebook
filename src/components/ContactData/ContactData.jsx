import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';
import { InfoDesc, InfoData, Container, Field } from './ContactData.styled';
import ActionLink from 'components/ActionLink/ActionLink';
import getPhoneNumber from 'utils/getPhoneNumber';
import getContactInfo from 'utils/getContactInfo';
import useTargetContact from 'hooks/useTargetContact';
import iconBtnType from 'constants/iconBtnType';
import makeBlur from 'utils/makeBlur';

const ContactData = () => {
  const targetContact = useTargetContact();
  if (!targetContact) {
    return;
  }
  const { number, email, chat } = getContactInfo(targetContact);
  const phoneNumber = getPhoneNumber(number);

  const onBtnClick = (e) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Container>
      <Field>
        <div>
          <InfoDesc>Phone number</InfoDesc>
          <InfoData>{number}</InfoData>
        </div>
        <ActionLink
          link={`tel:${phoneNumber}`}
          btnType={iconBtnType.phone}
          action={onBtnClick}
        >
          <HiOutlinePhone />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Email Address</InfoDesc>
          <InfoData>{email}</InfoData>
        </div>
        <ActionLink
          link={`mailto:${email}`}
          btnType={iconBtnType.message}
          action={onBtnClick}
        >
          <IoMdMail />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Chat</InfoDesc>
          <InfoData>{chat}</InfoData>
        </div>
        <ActionLink
          link={`tg://resolve?domain=${chat}`}
          btnType={iconBtnType.chat}
          action={onBtnClick}
        >
          <RiChat1Line />
        </ActionLink>
      </Field>
    </Container>
  );
};

export default ContactData;
