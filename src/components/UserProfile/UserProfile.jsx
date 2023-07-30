import { AiOutlineCalendar } from 'react-icons/ai';
import { HiOutlinePhone } from 'react-icons/hi';
import { SlLocationPin } from 'react-icons/sl';
import styled from '@emotion/styled';
import defaultAvatar from '../default-user-avatar.jpg';
import {
  BornDate,
  Container,
  Email,
  FullName,
  Image,
  Name,
  Phone,
  Location,
  ContactInfo,
  UserInfo,
} from './UserProfile.styled';

const iconStyle =
  'display: flex; align-items: center; width: 22px; height: 22px;';

const CalendarIcon = styled(AiOutlineCalendar)`
  ${iconStyle}
`;

const PhoneIcon = styled(HiOutlinePhone)`
  ${iconStyle}
`;

const LocationIcon = styled(SlLocationPin)`
  ${iconStyle}
`;

const UserProfile = ({ avatar }) => {
  const userAvatar = avatar ? avatar : defaultAvatar;
  return (
    <Container>
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
    </Container>
  );
};

export default UserProfile;
