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
        <PhoneButton href="tel:+110001111111">
          <PhoneIcon />
        </PhoneButton>
      </Field>
      <Field>
        <div>
          <InfoDesc>Email Address</InfoDesc>
          <InfoValue>onichan@gmail.com</InfoValue>
        </div>
        <MessageButton href="mailto:example@mail.ru">
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
