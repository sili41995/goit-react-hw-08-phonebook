import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';
import { InfoDesc, InfoData, Container, Field } from './ContactData.styled';
import ActionLink from 'components/ActionLink';
import utils from 'utils';
import hooks from 'hooks';
import constants from 'constants';

const { getContactInfo, getPhoneNumber } = utils;
const { iconBtnType } = constants;
const { useTargetContact } = hooks;

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
        <ActionLink link={`tel:${phoneNumber}`} btnType={iconBtnType.phone}>
          <HiOutlinePhone />
        </ActionLink>
      </Field>
      <Field>
        <div>
          <InfoDesc>Email Address</InfoDesc>
          <InfoData>{email}</InfoData>
        </div>
        <ActionLink link={`mailto:${email}`} btnType={iconBtnType.message}>
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
        >
          <RiChat1Line />
        </ActionLink>
      </Field>
    </Container>
  );
};

export default ContactData;
