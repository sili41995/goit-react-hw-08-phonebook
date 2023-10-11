import styled from '@emotion/styled';
import utils from 'utils';

const { setButtonColor, setIconFill } = utils;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 35px;
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${setButtonColor};
  border-radius: 8px;
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
