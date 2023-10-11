import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
