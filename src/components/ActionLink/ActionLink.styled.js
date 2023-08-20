import styled from '@emotion/styled';
import setButtonColor from 'utils/setButtonColor';
import setIconFill from 'utils/setIconFill';

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 35px;
  padding: 4px;
  background-color: ${setButtonColor};
  border-radius: 8px;
  &:hover,
  &:focus {
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  }
  & svg {
    width: 100%;
    height: 100%;
    fill: ${setIconFill};
    stroke: inherit;
  }
`;
