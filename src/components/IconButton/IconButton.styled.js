import styled from '@emotion/styled';
import setButtonColor from 'utils/setButtonColor';
import setIconFill from 'utils/setIconFill';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.primaryGap}px;
  min-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ theme }) => theme.spacing}px;
  border-radius: 8px;
  border-color: transparent;
  background-color: ${setButtonColor};
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  text-decoration: none;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.primaryShadow};
  }
  & svg {
    width: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    height: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    color: ${setIconFill};
  }
`;
