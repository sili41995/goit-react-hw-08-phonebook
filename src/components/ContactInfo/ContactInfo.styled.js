import styled from '@emotion/styled';

export const Image = styled.img`
  width: 112px;
  margin: 0 auto 6px;
`;

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactName = styled.p`
  color: #000;
  font-family: Jua;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const ContactDesc = styled.p`
  color: #7c7c7c;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;

export const Navigation = styled.nav`
  padding: 2px;
  border-radius: 10px;
  background: #eee;
  margin-top: 80px;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  & a {
    display: block;
    padding: 5px 20px;
    border-radius: 10px;
    color: #555;
    font-family: Jua;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    &.active,
    &:hover,
    &:focus {
      background: #44de6f;
    }
  }
`;
