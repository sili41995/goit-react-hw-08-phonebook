import styled from '@emotion/styled';
import setButtonColor from 'utils/setButtonColor';
import setIconFill from 'utils/setIconFill';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: 4px;
  border-radius: 8px;
  border-color: transparent;
  background-color: ${setButtonColor};
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
