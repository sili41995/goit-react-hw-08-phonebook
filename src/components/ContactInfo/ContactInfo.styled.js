import styled from '@emotion/styled';

export const Image = styled.img`
  width: 112px;
  margin: 0 auto ${({ theme }) => theme.spacing * 2}px;
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing * 2}px;
`;

export const ContactName = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.otherFontWeight};
  text-align: center;
`;

export const ContactDesc = styled.p`
  color: #7c7c7c;
  font-family: Inter;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  text-align: center;
`;

export const Navigation = styled.nav`
  padding: ${({ theme }) => theme.spacing}px;
  border-radius: 10px;
  background: #eee;
  margin-top: ${({ theme }) => theme.spacing * 20}px;
  margin-bottom: ${({ theme }) => theme.spacing * 10}px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  & a {
    display: block;
    padding: ${({ theme }) => theme.spacing}px
      ${({ theme }) => theme.spacing * 5}px;
    border-radius: 10px;
    color: #555;
    font-family: Jua;
    font-size: ${({ theme }) => theme.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.otherFontWeight};
    text-decoration: none;
    transition: background ${({ theme }) => theme.transitionDurationAndFunc};
    &.active,
    &:hover,
    &:focus {
      background: #44de6f;
    }
  }
`;
