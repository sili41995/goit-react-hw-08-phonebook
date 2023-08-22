import styled from '@emotion/styled';

export const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Input = styled.input`
  max-width: 200px;
  border: 1px solid #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  border-radius: 4px;
  background: transparent;
  padding: ${({ theme }) => theme.spacing * 2}px
    ${({ theme }) => theme.spacing * 4}px;
  color: #ffffff;
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  &:focus {
    outline: none;
  }
`;
