import styled from '@emotion/styled';

export const Header = styled.header`
  /* padding: 20px 0;
  background-color: #38b6ff; */
`;

export const Container = styled.div`
  display: ${({ isContactsPage }) => (isContactsPage ? 'flex' : 'block')};
  /* width: 1200px;
  padding: 0 16px;
  margin-left: auto;
  margin-right: auto; */
`;

export const Main = styled.main``;

export const Section = styled.section``;
