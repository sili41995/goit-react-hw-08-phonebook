import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 600px;
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: ${({ theme }) => theme.spacing(10)};
  margin: ${({ theme }) => theme.spacing(10)} auto;
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.secondaryShadow};
`;
