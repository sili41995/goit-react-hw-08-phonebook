import styled from '@emotion/styled';

export const LinkContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  & a {
    display: flex;
    gap: 10px;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    border-radius: 5px;
    background: #55c875;
    padding: 12px;
    color: #000000;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    &:hover,
    &:focus {
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;
