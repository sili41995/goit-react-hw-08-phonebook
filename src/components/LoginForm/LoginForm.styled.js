import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  color: #000000;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Message = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Image = styled.img`
  width: 150px;
  align-self: center;
`;

export const Button = styled.button`
  display: block;
  min-width: 170px;
  padding: 16px 32px;
  align-self: center;
  background-color: #4d5ae5;
  border-color: transparent;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.64px;
  &:hover,
  &:focus {
    background-color: #404bbf;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding: 8px 38px;
  font-family: Inter;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;
