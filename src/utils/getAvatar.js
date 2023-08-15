import defaulUserAvatar from 'components/default-user-avatar.jpg';
import defaultContactAvatar from 'components/default-contact-avatar.jpg';

export const getUserAvatar = (avatar) => (avatar ? avatar : defaulUserAvatar);

export const getContactAvatar = (avatar) =>
  avatar ? avatar : defaultContactAvatar;
