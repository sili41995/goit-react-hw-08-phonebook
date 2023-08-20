import { GiCheckMark } from 'react-icons/gi';
import { GoX } from 'react-icons/go';
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

export const EditButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 35px;
  padding: 4px;
  background-color: #89f2a6;
  border-radius: 8px;
  border-color: transparent;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 35px;
  padding: 4px;
  background-color: #ff9192;
  border-radius: 8px;
  border-color: transparent;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const Input = styled.input`
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

export const EditIcon = styled(GiCheckMark)`
  width: 100%;
  height: 100%;
  fill: #00c938;
  stroke: inherit;
`;

export const CancelIcon = styled(GoX)`
  width: 100%;
  height: 100%;
  fill: #d3232f;
  stroke: inherit;
`;
