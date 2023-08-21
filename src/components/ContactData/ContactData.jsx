import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';
import { InfoDesc, InfoData, Container, Field } from './ContactData.styled';
import ActionLink from 'components/ActionLink/ActionLink';
import useTargetContact from 'hooks/useTargetContact';
import getPhoneNumber from 'utils/getPhoneNumber';
import getContactInfo from 'utils/getContactInfo';

const ContactData = () => {
  const targetContact = useTargetContact();
  const { number, email, chat } = getContactInfo(targetContact);
  const phoneNumber = getPhoneNumber(number);

  return (
    <Container>
      <Field>
        <div>
          <InfoDesc>Phone number</InfoDesc>
          <InfoData>{number}</InfoData>
        </div>
        <ActionLink link={`tel:${phoneNumber}`} btnType="phone">
          <HiOutlinePhone />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Email Address</InfoDesc>
          <InfoData>{email}</InfoData>
        </div>
        <ActionLink link={`mailto:${email}`} btnType="message">
          <IoMdMail />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Chat</InfoDesc>
          <InfoData>{chat}</InfoData>
        </div>
        <ActionLink link={`tg://resolve?domain=${chat}`} btnType="chat">
          <RiChat1Line />
        </ActionLink>
      </Field>
    </Container>
  );
};

export default ContactData;
