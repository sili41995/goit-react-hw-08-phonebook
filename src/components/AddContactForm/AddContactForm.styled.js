import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

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

export const CancelButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  padding: 4px;
  background: rgba(217, 217, 217, 0.58);
  border-radius: 8px;
  border-color: transparent;
  color: #303030;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;
