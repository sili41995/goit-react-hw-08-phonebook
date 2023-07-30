import styled from '@emotion/styled';

export const Container = styled.div`
  width: 250px;
  padding: 8px;
`;

export const Image = styled.img`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  color: #000;
  font-family: Jua;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const UserInfo = styled.div`
  margin-top: 28px;
  margin-bottom: 64px;
`;

export const FullName = styled.p`
  margin-top: 8px;
  margin-bottom: 4px;
  color: #000;
  font-family: Jua;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const Email = styled.p`
  color: #7c7c7c;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const ContactInfo = styled.div``;

export const BornDate = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7c7c7c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:not(:last-child) {
    margin-bottom: 22px;
  }
`;

export const Phone = BornDate;
export const Location = BornDate;
