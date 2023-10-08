import defaulUserAvatar from 'components/default-user-avatar.jpg';
import defaultContactAvatar from 'components/default-contact-avatar.jpg';

const getUserAvatar = (avatar) => (avatar ? avatar : defaulUserAvatar);

const getContactAvatar = (avatar) => (avatar ? avatar : defaultContactAvatar);

const getAvatar = { getUserAvatar, getContactAvatar };

export default getAvatar;
