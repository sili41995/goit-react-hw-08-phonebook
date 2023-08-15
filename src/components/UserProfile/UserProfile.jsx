import { getUserAvatar } from 'utils/getAvatar';
import {
  BornDate,
  Email,
  FullName,
  Image,
  Name,
  Phone,
  Location,
  ContactInfo,
  UserInfo,
  CalendarIcon,
  PhoneIcon,
  LocationIcon,
} from './UserProfile.styled';

const UserProfile = ({ avatar }) => {
  const userAvatar = getUserAvatar(avatar);

  return (
    <>
      <Name>Alex</Name>
      <UserInfo>
        <Image src={userAvatar} alt="user avatar" />
        <FullName>Nguyen Si Alex</FullName>
        <Email>nsthien2109@gmail.com</Email>
      </UserInfo>
      <ContactInfo>
        <BornDate>
          <span>
            <CalendarIcon />
          </span>
          21-09-2001
        </BornDate>
        <Phone>
          <span>
            <PhoneIcon />
          </span>
          0705459542
        </Phone>
        <Location>
          <span>
            <LocationIcon />
          </span>
          Ngu Hanh Son, Da Nang
        </Location>
      </ContactInfo>
    </>
  );
};

export default UserProfile;
