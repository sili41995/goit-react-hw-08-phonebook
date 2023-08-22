import styled from '@emotion/styled';

export const Item = styled.li`
  align-items: center;
  padding: ${({ theme }) => theme.spacing * 3}px;
  border-radius: 10px;
  border: 0.5px solid rgba(137, 137, 137, 0.43);
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.primaryShadow};
  }
  & a {
    display: flex;
    gap: ${({ theme }) => theme.primaryGap}px;
    text-decoration: none;
    color: black;
  }
`;

export const Image = styled.img`
  width: 70px;
`;

export const ContactInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: ${({ theme }) => theme.primaryGap}px;
  align-items: center;
  & div {
    flex-basis: calc((100% - ${({ theme }) => theme.primaryGap}*2px) / 3);
  }
`;

export const Person = styled.div``;

export const Name = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.secondaryFontWeight};
  text-align: center;
`;

export const Role = styled.p`
  color: #636363;
  font-family: Inter;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  text-align: center;
`;

export const Phone = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  text-align: center;
`;

export const Email = styled.p`
  color: #696969;
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.secondaryFontWeight};
  text-align: center;
`;
