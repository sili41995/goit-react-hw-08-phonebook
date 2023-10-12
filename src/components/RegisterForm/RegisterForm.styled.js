import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Button = styled.button`
  display: block;
  min-width: 170px;
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(8)}`};
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primaryLinkColor};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.primaryBorderRadius}px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.5;
  letter-spacing: 0.64px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryLinkColor};
  }
`;
