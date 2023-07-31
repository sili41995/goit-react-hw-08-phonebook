import styled from '@emotion/styled';
import { BsSortAlphaDown } from 'react-icons/bs';
import { BsSortAlphaDownAlt } from 'react-icons/bs';

export const FilterContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Input = styled.input`
  max-width: 200px;
  border: 1px solid #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  background: transparent;
  padding: 8px 16px;
  color: #ffffff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 100%;
  padding: 8px;
  background-color: #d9d9d9;
  border-radius: 8px;
  border-color: transparent;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
`;

export const DescIcon = styled(BsSortAlphaDownAlt)`
  width: 100%;
  height: 100%;
  stroke: #555555;
`;

export const AscIcon = styled(BsSortAlphaDown)`
  width: 100%;
  height: 100%;
  stroke: #555555;
`;
