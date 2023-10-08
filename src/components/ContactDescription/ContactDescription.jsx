import useTargetContact from 'hooks/useTargetContact';
import { Description } from './ContactDescription.styled';
import utils from 'utils';

const { getContactInfo } = utils;

const ContactDescription = () => {
  const targetContact = useTargetContact();

  const { description } = getContactInfo(targetContact);

  return <Description>{description}</Description>;
};

export default ContactDescription;
