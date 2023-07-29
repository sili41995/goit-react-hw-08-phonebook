import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FormContainer = styled.div`
  width: 600px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  background-color: #fcfcfc;
  padding: 40px;
  margin: 40px auto;
  border-radius: 30px;
  box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.17);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  color: #000000;
  font-family: Inter;
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Message = styled.p`
  color: #000000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Image = styled.img`
  width: 150px;
  align-self: center;
`;

export const Button = styled.input`
  display: block;
  min-width: 170px;
  padding: 16px 32px;
  align-self: center;
  background-color: #4d5ae5;
  border-color: transparent;
  border-radius: 4px;
  cursor: pointer;
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

export const SignUpLink = styled(Link)`
  color: #4d5ae5;
`;

export const textFieldStyle = {
  fontFamily: 'Inter',
  fontSize: '20px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: 'normal',
};
