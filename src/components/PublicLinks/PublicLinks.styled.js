import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const ListItem = styled.li`
  & a {
    display: block;
    width: 100px;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #fff;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    text-align: center;
    &:hover,
    &:focus,
    &.active {
      color: #38b6ff;
      background-color: #fff;
    }
  }
`;
