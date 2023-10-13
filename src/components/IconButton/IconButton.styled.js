import styled from '@emotion/styled';
import { setButtonColor, setIconFill, setIconHoverEffect } from 'utils';

export const Button = styled.button`
  position: ${({ position }) => position};
  top: ${({ top }) => (top === 'center' ? '50%' : `${top}px`)};
  right: ${({ right }) => right}px;
  transform: translateY(${({ top }) => (top === 'center' ? '-50%' : false)});
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.primaryGap}px;
  min-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
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
    box-shadow: ${({ theme, inputWrap }) =>
      !inputWrap && theme.shadows.primaryShadow};
  }
  & svg {
    width: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    height: ${({ iconSize }) => (iconSize ? `${iconSize}px` : '100%')};
    color: ${setIconFill};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
  & svg:hover,
  & svg:focus {
    color: ${({ btnType, inputWrap }) =>
      inputWrap && setIconHoverEffect(btnType)};
  }
`;
