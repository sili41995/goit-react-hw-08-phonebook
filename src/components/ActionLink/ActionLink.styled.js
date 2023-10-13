import styled from '@emotion/styled';
import { setButtonColor, setIconFill } from 'utils';

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 35px;
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${setButtonColor};
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
  & svg {
    width: 100%;
    height: 100%;
    fill: ${setIconFill};
    stroke: inherit;
  }
`;
