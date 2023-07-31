import styled from '@emotion/styled';
import { HiOutlinePhone } from 'react-icons/hi';
import { IoMdMail } from 'react-icons/io';
import { RiChat1Line } from 'react-icons/ri';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InfoDesc = styled.p`
  color: #7c7c7c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const InfoValue = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Field = styled.div`
  display: flex;
`;

export const PhoneButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 44px;
  height: 35px;
  padding: 4px;
  background-color: #89f2a6;
  border-radius: 8px;
  border-color: transparent;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const MessageButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 44px;
  height: 35px;
  padding: 4px;
  background-color: #f2e189;
  border-radius: 8px;
  border-color: transparent;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const ChatButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  width: 44px;
  height: 35px;
  padding: 4px;
  background-color: #7fd1ff;
  border-radius: 8px;
  border-color: transparent;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const PhoneIcon = styled(HiOutlinePhone)`
  width: 100%;
  height: 100%;
  fill: #00c938;
  stroke: inherit;
`;

export const MessageIcon = styled(IoMdMail)`
  width: 100%;
  height: 100%;
  fill: #ffb422;
  stroke: inherit;
`;

export const ChatIcon = styled(RiChat1Line)`
  width: 100%;
  height: 100%;
  fill: #2681ed;
  stroke: inherit;
`;
