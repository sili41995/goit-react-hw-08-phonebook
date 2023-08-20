import { Description } from './ContactDescription.styled';

const ContactDescription = ({ description = 'No description' }) => (
  <Description>{description}</Description>
);

export default ContactDescription;
