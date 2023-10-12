import styled from '@emotion/styled';

export const Image = styled.img`
  width: 112px;
  margin: 0 auto ${({ theme }) => theme.spacing(2)};
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContactName = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  text-align: center;
`;

export const ContactDesc = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
`;

export const Navigation = styled.nav`
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => theme.secondaryBorderRadius}px;
  margin-top: ${({ theme }) => theme.spacing(20)};
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  & a {
    display: block;
    padding: ${({ theme }) => `${theme.spacing()} ${theme.spacing(5)}`};
    border-radius: ${({ theme }) => theme.secondaryBorderRadius}px;
    color: ${({ theme }) => theme.colors.otherFontColor};
    font-family: Jua;
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
    text-decoration: none;
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc};
    &.active,
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.otherLinkColor};
    }
  }
`;
