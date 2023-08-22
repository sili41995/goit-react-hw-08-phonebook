import styled from '@emotion/styled';

export const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  & a {
    display: flex;
    gap: ${({ theme }) => theme.spacing * 3}px;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    border-radius: 5px;
    background: #55c875;
    padding: ${({ theme }) => theme.spacing * 3}px;
    color: ${({ theme }) => theme.primaryFontColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.primaryFontWeight};
    text-decoration: none;
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.primaryShadow};
    }
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;
