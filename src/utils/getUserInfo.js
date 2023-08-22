import defaultValues from 'constants/defaultValues';
import { getUserAvatar } from 'utils/getAvatar';

const getUserInfo = (user) => {
  const {
    name,
    lastName,
    email,
    avatar,
    dateOfBirth = defaultValues.dateOfBirth,
    phoneNumber = defaultValues.phoneNumber,
    location = defaultValues.location,
  } = user;
  const userName = lastName ? `${name} ${lastName}` : `${name}`;
  const userAvatar = getUserAvatar(avatar);

  return {
    name,
    userAvatar,
    userName,
    email,
    dateOfBirth,
    phoneNumber,
    location,
  };
};

export default getUserInfo;
