import { getUserAvatar } from 'utils/getAvatar';
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

const UserProfile = ({ avatar }) => {
  const userAvatar = getUserAvatar(avatar);

  return (
    <UserProfileContainer>
      <Name>Alex</Name>
      <UserData>
        <Image src={userAvatar} alt="user avatar" />
        <FullName>Nguyen Si Alex</FullName>
        <Email>nsthien2109@gmail.com</Email>
      </UserData>
      <UserInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <AiOutlineCalendar />
          </ContactInfoIconWrap>
          21-09-2001
        </ContactInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <HiOutlinePhone />
          </ContactInfoIconWrap>
          0705459542
        </ContactInfo>
        <ContactInfo>
          <ContactInfoIconWrap>
            <SlLocationPin />
          </ContactInfoIconWrap>
          Ngu Hanh Son, Da Nang
        </ContactInfo>
      </UserInfo>
    </UserProfileContainer>
  );
};

export default UserProfile;
