import styled from '@emotion/styled';
import constants from 'constants';
import utils from 'utils';

const { formType } = constants;
const {
  setInputMaxWidth,
  setInputHeight,
  setInputBorderColor,
  setInputFilter,
  setInputBorderRadius,
  setInputPadding,
  setInputFontColor,
  setInputFontSize,
} = utils;

export const Container = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: ${({ inputType }) => setInputMaxWidth(inputType)};
  height: ${({ inputType }) => setInputHeight(inputType)};
  background-color: transparent;
  border: 1px solid ${({ inputType }) => setInputBorderColor(inputType)};
  filter: ${({ inputType }) => setInputFilter(inputType)};
  border-radius: ${({ inputType }) => setInputBorderRadius(inputType)}px;
  padding: ${({ inputType }) => setInputPadding(inputType)};
  font-family: Inter;
  color: ${({ inputType }) => setInputFontColor(inputType)};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ${({ inputType }) => setInputFontSize(inputType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme, inputType }) =>
      inputType === formType.filter ? false : theme.colors.primaryColor};
  }
`;
