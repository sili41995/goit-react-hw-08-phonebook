import styled from '@emotion/styled';

export const Header = styled.header`
  padding-top: ${({ theme }) => theme.spacing * 5}px;
  padding-bottom: ${({ theme }) => theme.spacing * 5}px;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const Container = styled.div`
  display: ${({ isContactsPage }) => (isContactsPage ? 'flex' : 'block')};
  width: 1200px;
  padding-left: ${({ theme }) => theme.paddingContainer}px;
  padding-right: ${({ theme }) => theme.paddingContainer}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.main``;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.paddingContainer}px;
  padding-bottom: ${({ theme }) => theme.paddingContainer}px;
`;
