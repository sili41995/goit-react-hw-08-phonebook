import { useSelector } from 'react-redux';
import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import { getUserInfo } from 'utils';
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
import { authSelectors } from 'redux/auth';

const UserProfile = () => {
  const user = useSelector(authSelectors.selectUser);
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
