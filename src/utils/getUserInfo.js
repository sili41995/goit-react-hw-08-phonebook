import defaultValues from 'constants/defaultValues';
import utils from 'utils';

const getUserInfo = (user) => {
  const { getAvatar } = utils;
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
  const userAvatar = getAvatar.getUserAvatar(avatar);

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
