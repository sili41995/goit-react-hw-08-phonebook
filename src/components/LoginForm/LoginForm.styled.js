import styled from '@emotion/styled';

export const Title = styled.h2`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
`;

export const Message = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Image = styled.img`
  width: 150px;
  align-self: center;
`;

export const Button = styled.button`
  display: block;
  min-width: 170px;
  padding: ${({ theme }) => theme.spacing * 4}px
    ${({ theme }) => theme.spacing * 8}px;
  align-self: center;
  background-color: ${({ theme }) => theme.primaryLinkColor};
  border-color: transparent;
  border-radius: 4px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  line-height: 1.5;
  letter-spacing: 0.64px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.secondaryLinkColor};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing * 2}px
    ${({ theme }) => theme.spacing * 10}px;
  font-family: Inter;
  font-weight: ${({ theme }) => theme.primaryFontWeight};
  font-size: 20px;
  line-height: 1.17;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primaryColor};
  }
`;
