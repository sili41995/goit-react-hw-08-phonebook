import { Description } from './ContactDescription.styled';
import hooks from 'hooks';
import utils from 'utils';

const { getContactInfo } = utils;
const { useTargetContact } = hooks;

const ContactDescription = () => {
  const targetContact = useTargetContact();

  const { description } = getContactInfo(targetContact);

  return <Description>{description}</Description>;
};

export default ContactDescription;
