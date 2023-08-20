import styled from '@emotion/styled';
import setButtonColor from 'utils/setButtonColor';
import setIconFill from 'utils/setIconFill';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  min-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 4px;
  border-radius: 8px;
  border-color: transparent;
  background-color: ${setButtonColor};
  color: #000000;
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
  & svg {
    width: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    height: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    color: ${setIconFill};
  }
`;
