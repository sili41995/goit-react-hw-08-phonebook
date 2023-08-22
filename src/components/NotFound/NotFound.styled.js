import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Jua;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.otherFontWeight};
`;
export const Message = styled.p`
  color: #555;
  font-family: Jua;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.otherFontWeight};
`;
