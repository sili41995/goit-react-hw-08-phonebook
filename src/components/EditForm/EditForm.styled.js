import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.secondaryFontWeight};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing * 10}px;
  align-self: center;
`;
