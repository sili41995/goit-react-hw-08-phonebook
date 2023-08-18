import styled from '@emotion/styled';

export const Message = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  & a {
    color: ${({ theme }) => theme.primaryLinkColor};
  }
`;
