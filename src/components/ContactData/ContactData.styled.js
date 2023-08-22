import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing * 10}px;
`;

export const InfoDesc = styled.p`
  color: #7c7c7c;
  font-family: Inter;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
`;

export const InfoData = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
`;
