import styled from '@emotion/styled';
import formType from 'constants/formType';
import setInputBorderColor from 'utils/setInputBorderColor';
import setInputBorderRadius from 'utils/setInputBorderRadius';
import setInputFilter from 'utils/setInputFilter';
import setInputFontColor from 'utils/setInputFontColor';
import setInputFontSize from 'utils/setInputFontSize';
import setInputHeight from 'utils/setInputHeight';
import setInputMaxWidth from 'utils/setInputMaxWidth';
import setInputPadding from 'utils/setInputPadding';

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
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  font-size: ${({ inputType }) => setInputFontSize(inputType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme, inputType }) =>
      inputType === formType.filter ? false : theme.primaryColor};
  }
`;
