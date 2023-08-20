import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';
import { InfoDesc, InfoData, Container, Field } from './ContactData.styled';
import ActionLink from 'components/ActionLink/ActionLink';

const ContactData = () => {
  return (
    <Container>
      <Field>
        <div>
          <InfoDesc>Phone number</InfoDesc>
          <InfoData>0902362954</InfoData>
        </div>
        <ActionLink link="tel:0000000000" type="phone">
          <HiOutlinePhone />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Email Address</InfoDesc>
          <InfoData>test@gmail.com</InfoData>
        </div>
        <ActionLink link="test@gmail.com" type="message">
          <IoMdMail />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Chat</InfoDesc>
          <InfoData>testchat</InfoData>
        </div>
        <ActionLink link="test@gmail.com" type="chat">
          <RiChat1Line />
        </ActionLink>
      </Field>
    </Container>
  );
};

export default ContactData;
