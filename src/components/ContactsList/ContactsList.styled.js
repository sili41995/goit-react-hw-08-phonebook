import styled from '@emotion/styled';

export const List = styled.ul`
  width: 650px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
  flex-shrink: 0;
`;
