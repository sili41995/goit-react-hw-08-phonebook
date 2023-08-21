import styled from '@emotion/styled';

export const Title = styled.p`
  color: #000;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 40px;
  align-self: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding: 8px 38px;
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
  line-height: normal;
  letter-spacing: 0.04em;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;
