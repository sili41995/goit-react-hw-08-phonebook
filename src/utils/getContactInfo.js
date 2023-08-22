import defaultValues from 'constants/defaultValues';
import { getContactAvatar } from 'utils/getAvatar';

const getContactInfo = (contact) => {
  const {
    id,
    name,
    number,
    avatar,
    role = defaultValues.role,
    email = defaultValues.email,
    chat = defaultValues.chat,
    description = defaultValues.description,
  } = contact;
  const userAvatar = getContactAvatar(avatar);

  return { userAvatar, name, id, role, number, email, chat, description };
};

export default getContactInfo;
