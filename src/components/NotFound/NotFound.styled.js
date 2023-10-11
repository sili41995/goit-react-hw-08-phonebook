import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
export const Message = styled.p`
  color: #555;
  font-family: Jua;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
`;
