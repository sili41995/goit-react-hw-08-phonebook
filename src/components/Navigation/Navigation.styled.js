import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

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
