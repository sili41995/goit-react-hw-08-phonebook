import styled from '@emotion/styled';

export const UserProfileContainer = styled.div`
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 150px;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;

export const UserData = styled.div`
  margin-top: ${({ theme }) => theme.spacing(7)};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;

export const UserInfo = styled.div``;

export const FullName = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  text-align: center;
`;

export const Email = styled.p`
  color: #7c7c7c;
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  color: #7c7c7c;
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
`;

export const ContactInfoIconWrap = styled.span`
  display: flex;
  align-items: center;
  & svg {
    width: 22px;
    height: 22px;
  }
`;
