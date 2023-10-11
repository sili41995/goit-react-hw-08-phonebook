import styled from '@emotion/styled';
import utils from 'utils';

const { setButtonColor, setIconFill } = utils;

export const Button = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => top}px;
  right: ${({ right }) => right}px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.primaryGap}px;
  min-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ theme }) => theme.spacing()};
  border-radius: 8px;
  border-color: transparent;
  background-color: ${setButtonColor};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-decoration: none;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  z-index: 10;
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
  & svg {
    width: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    height: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    color: ${setIconFill};
  }
`;
