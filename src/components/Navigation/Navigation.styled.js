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
    padding: ${({ theme }) => theme.spacing(3)};
    border-radius: 5px;
    border: 1px solid #fff;
    color: ${({ theme }) => theme.colors.otherFontColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    text-decoration: none;
    text-align: center;
    transition: color,
      background-color ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus,
    &.active {
      color: ${({ theme }) => theme.colors.primaryColor};
      background-color: #fff;
    }
  }
`;
