import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import {
  UserInfo,
  Email,
  FullName,
  Image,
  Name,
  ContactInfo,
  UserData,
  ContactInfoIconWrap,
  UserProfileContainer,
} from './UserProfile.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import getUserInfo from 'utils/getUserInfo';

const UserProfile = () => {
  const user = useSelector(selectUser);
  const {
    name,
    userAvatar,
    userName,
    email,
    dateOfBirth,
    phoneNumber,
    location,
  } = getUserInfo(user);

  return (
    <UserProfileContainer>
      <Name>{name}</Name>
      <UserData>
        <Image src={userAvatar} alt="user avatar" />
        <FullName>{userName}</FullName>
        <Email>{email}</Email>
      </UserData>
      <UserInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <AiOutlineCalendar />
          </ContactInfoIconWrap>
          {dateOfBirth}
        </ContactInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <HiOutlinePhone />
          </ContactInfoIconWrap>
          {phoneNumber}
        </ContactInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <SlLocationPin />
          </ContactInfoIconWrap>
          {location}
        </ContactInfo>
      </UserInfo>
    </UserProfileContainer>
  );
};

export default UserProfile;
