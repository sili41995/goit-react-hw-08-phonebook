import {
  InfoDesc,
  InfoValue,
  Container,
  Field,
  PhoneButton,
  PhoneIcon,
  MessageButton,
  MessageIcon,
  ChatButton,
  ChatIcon,
} from './Contact.styled';

const Contact = () => {
  return (
    <Container>
      <Field>
        <div>
          <InfoDesc>Phone number</InfoDesc>
          <InfoValue>0902362954</InfoValue>
        </div>
        <PhoneButton>
          <PhoneIcon />
        </PhoneButton>
      </Field>
      <Field>
        <div>
          <InfoDesc>Email Address</InfoDesc>
          <InfoValue>onichan@gmail.com</InfoValue>
        </div>
        <MessageButton>
          <MessageIcon />
        </MessageButton>
      </Field>
      <Field>
        <div>
          <InfoDesc>Chat</InfoDesc>
          <InfoValue>marichan</InfoValue>
        </div>
        <ChatButton>
          <ChatIcon />
        </ChatButton>
      </Field>
    </Container>
  );
};

export default Contact;
