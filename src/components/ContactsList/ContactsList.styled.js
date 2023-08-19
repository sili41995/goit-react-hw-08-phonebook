import styled from '@emotion/styled';

export const List = styled.ul`
  width: 600px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
