import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.primaryFontColor};
  font-family: Inter;
  font-size: 20px;
  font-weight: ${({ theme }) => theme.secondaryFontWeight};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing * 10}px;
  align-self: center;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: ${({ theme }) => theme.spacing}px;
    background: rgba(217, 217, 217, 0.58);
    border-radius: 8px;
    border-color: transparent;
    color: ${({ theme }) => theme.primaryFontColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.primaryFontWeight};
    text-decoration: none;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.primaryShadow};
    }
  }
`;
