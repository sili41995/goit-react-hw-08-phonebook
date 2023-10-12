import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.otherFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  align-self: center;
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: ${({ theme }) => theme.spacing()};
    background: rgba(217, 217, 217, 0.58);
    border-radius: ${({ theme }) => theme.secondaryBorderRadius}px;
    border-color: transparent;
    color: ${({ theme }) => theme.colors.primaryFontColor};
    font-family: Inter;
    font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
    font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
    text-decoration: none;
    transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
    &:hover,
    &:focus {
      box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
    }
  }
`;
