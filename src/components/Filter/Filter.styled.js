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
  padding: 8px 16px;
  color: #ffffff;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &:focus {
    outline: none;
  }
`;
